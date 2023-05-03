import { useEffect, useState } from "react";
import Cart from "../Cart/cart";
import Products from "../Products/Products";
import "./Shop.css";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";
const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //get shopping cart product
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //console.log(storedCart)

    //get product id
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id == id);
      const newquantity = storedCart[id];
      console.log(addedProduct);
      if (addedProduct) {
        addedProduct.quantity = newquantity;
        savedCart.push(addedProduct);
      }
      //
      setCart(savedCart);
    
    }
  }, [products]);

  const handleAddtoCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      //prothombar add hocce
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      //akana existing product modify hocce jar jonna j prduct modify hocce ota chara onno sob product nia alada kore add korte hbe
      exists.quantity += 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="Shop-Container">
      <div className="Products-Container">
        {products.map((products) => (
          <Products
            handleAddtoCart={handleAddtoCart}
            product={products}
            key={products.id}
          ></Products>
        ))}
      </div>
      <div className="Order-Summary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
