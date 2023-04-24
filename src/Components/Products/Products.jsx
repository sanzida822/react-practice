import './Products.css'
const Products = (props) => {
    const {name,img,price,ratings,seller}=props.product;
    console.log(price)
  //  console.log(props)
    return (
        <div className='Product-Container'>
            <img src={img} alt="" />
           <div className="product-info">
           <h6 className='product-name'>{name}</h6>
            <p className='product-price'>{price}</p>
            <p className='product-seller'>{seller}</p>
            <p className='product-ratings'>{ratings}</p>
           </div>
           <div className="btn-cart">Add to cart</div>
        </div>
      
    );
};

export default Products;