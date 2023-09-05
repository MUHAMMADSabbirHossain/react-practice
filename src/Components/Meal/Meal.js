import React from 'react';
import "./Meal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Meal = ({ meal, handelAddToCart }) => {
    // console.log(props);
    const { idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb, strSource, strYoutube } = meal;



    return (
        <div className='meal-cart'>
            <div className="cart-heading">
                <h3 className='cart-heading-name'>{strMeal}</h3>
                <p className='cart-heading-area'>{strArea}</p>
            </div>

            <img className='cart-image' src={strMealThumb} alt="" />

            <div className="cart-details">
                <p> Category: {strCategory}</p>
                {/* <p>Description: {strInstructions}</p> */}
                {/* <p>Details Link: <small>{strSource}</small></p> */}
                {/* <p>YouTube Link: <small>{strYoutube}</small></p> */}
            </div>
            <button className='add-to-cart-btn' onClick={() => handelAddToCart(meal)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;