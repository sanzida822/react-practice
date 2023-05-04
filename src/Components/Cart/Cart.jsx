import Products from "../Products/Products";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
  const { cart ,handleClearCart,children} = props;
  let total = 0;
  let shipping = 0;
  let totalQuantity = 0;
  // console.log(cart);
  for (const product of cart) {
    //product quantity
    //product.quantity=product.quantity or sign hobe 1
    total += product.price * product.quantity;
    totalQuantity += product.quantity;
    shipping += product.shipping;
  }
  const tax = total * 0.5;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items:{totalQuantity}</p>
      <p>Totalprice:${total.toFixed(2)}</p>
      <p>Total Shipping Price:${shipping.toFixed(2)}</p>
      <p>Tax:${tax}</p>
      <p>Grand Total:{grandTotal.toFixed(2)}</p>
      <button onClick={handleClearCart} className="clear-cart">Clear cart <FontAwesomeIcon   className="trash-icon" icon={faTrash} /> </button>
    {children}
    </div>
  );
};

export default Cart;
