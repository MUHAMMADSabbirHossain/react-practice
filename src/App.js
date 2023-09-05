// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CartSection from './Components/CartSection/CartSection';
import Shop from './Components/Shop/Shop';

function App() {
  const [selectedMeals, setSelectedMealId] = useState([]);


  const handelAddToCart = (selectedMeal) => {
    console.log("clicked", selectedMeal);
    const newArray = [...selectedMeals, selectedMeal]
    setSelectedMealId(newArray);
  }

  return (
    <div className="App">
      {/*     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header><nav><h1>The Meal Db API!</h1></nav></header>
      <main id='main'>
        <Shop handelAddToCart={handelAddToCart}></Shop>
        <CartSection selectedMeals={selectedMeals}></CartSection></main>
      <footer></footer>

    </div>
  );
}

export default App;
