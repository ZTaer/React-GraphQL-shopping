import React from 'react';
import "./cart-dropdown.styles.scss";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map( cur => (<CartItem key={cur.id} item={cur} />) ) :
                    (<span className="cart-items-alt" >你购物车是空的!</span>)
                }
            </div>
            <CustomButton 
            onClick={ ()=>{
                toggleCartHidden();
                history.push('/checkout');
            } } 
            selfCss={
                'cart-dropdown-btn'
            } >
                结算
            </CustomButton>
        </div>
    );
}

export default withRouter(CartDropdown);