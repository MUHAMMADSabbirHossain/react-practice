import React from 'react';
import "./CartItem.css";

const CartItem = ({ selectedMeals }) => {
    console.log(selectedMeals);

    return (
        <div className='cart-section-meal'>
            <p>{selectedMeals.strMeal}</p>
            <img src={selectedMeals.strMealThumb} alt="" />
        </div>
    );
};

export default CartItem;