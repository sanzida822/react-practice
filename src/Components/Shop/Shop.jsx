import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch("products.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  })
    return (
        <div className='Shop-Container'>
            <div className="Products-Container">
            {
                products.map(products => <Products product={products} key={products.id}></Products>)
            }
                </div>
            <div className="Order-Summary"><h2>Order summary hee</h2></div>
            
        </div>
    );
};

export default Shop;