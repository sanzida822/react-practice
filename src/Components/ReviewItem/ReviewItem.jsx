import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product ,handleRemoveCart}) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review-product">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price:<span className="orange-color">${price}</span>
        </p>
        <p>
          Quantity:<span className="orange-color">${quantity}</span>
        </p>
      </div>
      <button onClick={()=>handleRemoveCart(id)} className="button-delete"> 
      <FontAwesomeIcon  className="trash-icon" icon={faTrash} /></button>
    </div>
  );
};

export default ReviewItem;
