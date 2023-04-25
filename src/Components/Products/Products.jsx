import './Products.css'
const Products = (props) => {
    const {name,img,price,ratings,seller}=props.product;
   // console.log(price)
  //  console.log(props)
  const handleAddtoCart=props.handleAddtoCart;
  
    return (
        <div className='Product-Container'>
            <img src={img} alt="" />
           <div className="product-info">
           <h6 className='product-name'>{name}</h6>
            <p className='product-price'>{price}</p>
            <p className='product-seller'>{seller}</p>
            <p className='product-ratings'>{ratings}</p>
           </div>
           <button onClick={()=>handleAddtoCart(props.product)} className="btn-cart">Add to cart</button>
        </div>
      
    );
};

export default Products;