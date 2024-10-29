import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const { items, addItem, removeItem } = useContext(CartContext);
  const cartTotal = items.reduce(
    (cartTotalPrice, item) => (cartTotalPrice += item.quantity * item.price),
    0
  );
  const handleButtonClose = () => {
    hideCart();
  };

  const handleGoToCheckout = () => {
    showCheckout();
  };
  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleButtonClose : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleButtonClose}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
