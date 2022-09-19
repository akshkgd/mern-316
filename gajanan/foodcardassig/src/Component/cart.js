import Foodcard from "./foodcard";
import React, { useState } from 'react';

function Cart(props){
// let [cart, addcart] = useState(0)

    return(
        <button className='cart'>Dish's Container {props.cart}</button>
    );

}
export default Cart;