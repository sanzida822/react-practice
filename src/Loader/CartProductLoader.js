import { getShoppingCart } from "../../utilities/fakedb";

const CartProductLoader=async()=>{
const loadedProduct=await fetch("products.json")
const products= await loadedProduct.json()
// if product stored in cart
const storedCart=getShoppingCart();
// console.log(storedCart)
const savedCart=[]
for(const id in storedCart){
    const addedProducts=products.find(product=>product.id===id)
  
    if(addedProducts){
      
        const quantity=storedCart[id]
      
        addedProducts.quantity=quantity;
        savedCart.push(addedProducts)

    }
    
}
//console.log(savedCart.length)
return savedCart;

}
export default CartProductLoader;