import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
const Header = () => {
  const { items } = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const itemsLength = items.reduce(
    (totalItems, item) => (totalItems += item.quantity),
    0
  );
  const handleShowCart = ()=> {
    userProgressContext.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="A restuarant" />
        <h1>FOODY BUDDY</h1>
      </div>
      <nav>
        <Button onClick = {handleShowCart} textOnly>Cart ({itemsLength})</Button>
      </nav>
    </header>
  );
};

export default Header;
