import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  // item.image = process.env.PUBLIC_URL + "/" + item.image;
  // item.image = "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [data, setData] = useState('bakeryData');
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadData = () => {
    setData(bakeryData)
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    showCart()
  }, [cart])

  const buildElements = () => {
    const jsxList = bakeryData.map((item, index) => (
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} addToCart={addToCart}/>
      ))
    return jsxList
  }

  const showCart = () => {
    const jsxList = cart.map((name, index) => {
      return <p key={index}>{name}</p>
    })
    if (cart.length == 0) {
      console.log('cart is empty')
      return <p style={{padding: '3px'}}>Cart is Empty</p>
    } else return jsxList
  }

  const addToCart = (name, price) => {
    console.log('adding to cart', price);
    setCart([...cart, name]);
    setTotalPrice(totalPrice + price)

    // const prices_greater_than_5 = cart.filter(price => {
    //   if (price > 5) {
    //     return True
    //   } else False
    // })
    // setCart(prices_greater_than_5)

    // setCart(prev_cart => {
    //   const prices_less_than_5 = [...prev_cart, price]
    //   .filter(price = price < 5)
    // })
  }

  return (
    <div className="App">
      <div className="left-container">
        <div>
          <h1>My Bakery</h1> 
        </div>
        <div class="item-container">
          {buildElements()}
        </div>
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        <br/>
        {showCart()}
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
      </div>
    </div>
  );
}

export default App;
