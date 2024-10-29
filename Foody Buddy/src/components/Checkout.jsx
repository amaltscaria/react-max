import Modal from "./UI/Modal";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const reqMethod = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { items, clearCart } = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", reqMethod);

  const cartTotal = items.reduce(
    (cartTotalPrice, item) => (cartTotalPrice += item.quantity * item.price),
    0
  );
  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = ()=>{
    userProgressCtx.hideCheckout();
    clearCart();
    clearData();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    sendRequest(JSON.stringify({ order: { items, customer: data } }));
  };
  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data....</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClose}
      >
        <h2>Success</h2>
        <p>Your order was submitted successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action="" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name"></Input>
        <Input label="E-Mail Address" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"></Input>
          <Input label="City" type="text" id="city"></Input>
        </div>
        {error && (
          <ErrorPage title="Failed to submit order" message={error}></ErrorPage>
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
