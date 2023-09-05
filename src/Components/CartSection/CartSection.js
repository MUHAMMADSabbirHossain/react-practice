import React from 'react';
import "./CartSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../CartItem/CartItem';

const CartSection = ({ selectedMeals }) => {
    // console.log(selectedMeals);
    // console.log(selectedMeals.length);


    return (
        <div className='cart-summary'>
            <div className='cart-summary-details'>

                <h2>Order Summary</h2>
                <h5>Selected Items: {selectedMeals.length}</h5>
                <div className='cart-summary-review'>
                    {
                        selectedMeals.map(meal => <CartItem selectedMeals={meal} key={meal.idMeal}></CartItem>)
                    }
                </div>

                <h5>Total Price: ${ }</h5>
                <h5>Total Shipping: ${ }</h5>
                <h5>Tax: ${ }</h5>
                <h2>Grand Total: ${ }</h2>

                <div >
                    <button className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button>
                    <button className='review-cart-btn'>Review Order <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default CartSection;