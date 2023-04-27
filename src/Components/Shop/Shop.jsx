import { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import Products from '../Products/Products';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
const Shop = () => {
  
    const[cart,setCart]= useState([])
    const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch("products.json")
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  //get shopping cart product
useEffect(()=>{
    const storedCart=getShoppingCart();
    const savedCart=[];
  //console.log(storedCart)

    //get product id
    for(const id in storedCart){
      
const addedProduct=products.find(product=>product.id==id)
const newquantity=storedCart[id]
console.log(addedProduct)
if(addedProduct){
    addedProduct.quantity=newquantity;
    savedCart.push(addedProduct)
}
// 
setCart(savedCart);
 console.log(addedProduct)
    }
},

[products])

  const handleAddtoCart=(product)=>{
   const newCart=[...cart,product]
   setCart(newCart)
   addToDb(product.id)
 
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