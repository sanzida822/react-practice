import React, { useState } from "react";
import Cart from "../Cart/cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();


  //for removing cart item
  const [cart, setCart] = useState(savedCart);
  const handleRemoveCart = (id) => {
   const remaining=cart.filter(product=>product.id!==id);
   removeFromDb(id)
   setCart(remaining)
    console.log(id)
  };

//clear cart
const handleClearCart=()=>{
  setCart([])
deleteShoppingCart()
}
  return (
    <div className="Shop-Container">
      <div className="Review-Container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} handleRemoveCart={handleRemoveCart}></ReviewItem>
        ))}
      </div>
      <div className="Order-Summary">
        <Cart cart={cart} handleClearCart={handleClearCart}>
        <Link to="/checkout"><button className="btn-proceed">Process checkout</button> </Link>

        </Cart>
      </div>
    </div>
  );
};

export default Orders;
