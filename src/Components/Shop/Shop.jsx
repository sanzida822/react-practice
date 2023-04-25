import { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
  
    const[cart,setCart]= useState([])
    const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch("products.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  const handleAddtoCart=(product)=>{
   const newCart=[...cart,product]
    setCart(newCart)
   
 
   }
    return (
        <div className='Shop-Container'>
            <div className="Products-Container">
            {
                products.map(products => <Products handleAddtoCart={handleAddtoCart} product={products} key={products.id}></Products>)
            }
                </div>
            <div className="Order-Summary">
        <Cart cart={cart}></Cart>
                
                </div>            
        </div>
    );
};

export default Shop;