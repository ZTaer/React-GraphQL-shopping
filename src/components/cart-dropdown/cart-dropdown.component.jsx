import React from 'react';
import "./cart-dropdown.styles.scss";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

// redux的dispatch()可以直接传递使用-便捷式使用dispatch(完成笔记)
    // 0. redux的dispatch()可以直接传递使用
    // 1. 并且在只有mapStateToProps()的情况下
    // 2. dispatch()函数可以直接执行actions中的函数，非常方便
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


// withRouter与redux的connect嵌套并不冲突(完成笔记)
    // 0. 正常使用即可
export default withRouter(CartDropdown);