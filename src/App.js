import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [currCart, nextCart] = useState([]);
  const [currTotal, nextTotal] = useState(0);

  function addCartItem(item) {
    nextCart([...currCart, item])
  }

  function updateTotal(item) {
    nextTotal(currTotal + item.price)
  }

  function handleClick(item) {
    addCartItem(item);
    updateTotal(item);
  }


  return (
    <div className="App">
      <h1>First Class Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} handleClick={handleClick} /> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {currCart.map((item) => (<p>{item.name}</p>))}
        <p>Total: {currTotal}</p>
      </div>
    </div>
  );
}

export default App;
