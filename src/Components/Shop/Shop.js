import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Meal from '../Meal/Meal';


const Shop = ({ handelAddToCart }) => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setMeals(data.meals));
    }, [])
    // console.log("meals: ", meals);
    // console.log("meals: ", meals.length);

    return (
        <div className='shop'>
            <h2>Meals Items: {meals.length}...</h2>
            <div className='cart-container'>
                {
                    meals.map(meal => <Meal meal={meal} handelAddToCart={handelAddToCart} key={meal.idMeal}></Meal>)
                }
            </div>

        </div>
    );
};

export default Shop;