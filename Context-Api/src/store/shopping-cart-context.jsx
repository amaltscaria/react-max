import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemsToCart: () => {},
  updateItemQuantity: () => {},
});
// Reducer function => it is defined outside the componenet becasue.
// It need not to be recreated whenever the component function is executed again.
// It also don't need access to props or any other values defined or updated in component.
// guaranteed to get the latest state like in the function argument in
// normal  state updating function.
const shoppingCartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // not needed here because we have only 1 state
      items: updatedItems, // return the updated state here.
    };
  }
  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
};

const CartContextProvider = ({ children }) => {
  // state            // dispatch => to dispatch actions    // reducer function    // initital state
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

//   const [shoppingCart, setShoppingCart] = useState({
//     items: [],
//   });

  function handleAddItemToCart(id) {
    // migrating to dispatch from normal useState
    shoppingCartDispatch({
      type: "ADD_ITEM", // convention to write it like this
      payload: id,
    });
    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];
    //   const existingCartItemIndex = updatedItems.findIndex(
    //     (cartItem) => cartItem.id === id
    //   );
    //   const existingCartItem = updatedItems[existingCartItemIndex];
    //   if (existingCartItem) {
    //     const updatedItem = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     };
    //     updatedItems[existingCartItemIndex] = updatedItem;
    //   } else {
    //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
    //     updatedItems.push({
    //       id: id,
    //       name: product.title,
    //       price: product.price,
    //       quantity: 1,
    //     });
    //   }
    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
    // setShoppingCart((prevShoppingCart) => {
      //   const updatedItems = [...prevShoppingCart.items];
      //   const updatedItemIndex = updatedItems.findIndex(
      //     (item) => item.id === productId
      //   );
      //   const updatedItem = {
      //     ...updatedItems[updatedItemIndex],
      //   };
      //   updatedItem.quantity += amount;
      //   if (updatedItem.quantity <= 0) {
      //     updatedItems.splice(updatedItemIndex, 1);
      //   } else {
      //     updatedItems[updatedItemIndex] = updatedItem;
      //   }
      //   return {
      //     items: updatedItems,
      //   };
    // });
  }

  const ctxValue = {
    // items: shoppingCart.items,
    items: shoppingCartState.items, // from useReducer
    addItemsToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
