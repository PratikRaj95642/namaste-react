import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      cart
      <div className="cart-items">
        <button onClick={handleClearCart}>Clear cart</button>
        {cartItems.length === 0  && <h1>Your cart item is empty please add some food!!</h1>}
        <ItemList item={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
