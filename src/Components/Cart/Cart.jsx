import Products from '../Products/Products';
import './Cart.css'

const Cart = (props) => {
const {cart}= props;
let total=0;
let shipping=0;
let totalQuantity=0;
console.log(cart);
for(const product of cart){
    total+= product.price;
    totalQuantity+=product.quantity;
    shipping+=product.shipping;

}
const tax=total*.5;
const grandTotal=total+shipping+tax;
    return (
        <div className="cart">
    <h4>Order Summary</h4>
    <p>Selected Items:{totalQuantity}</p>
    <p>Totalprice:${total.toFixed(2)}</p>
    <p>Total Shipping Price:${shipping.toFixed(2)}</p>
    <p>Tax:${tax}</p>
    <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;