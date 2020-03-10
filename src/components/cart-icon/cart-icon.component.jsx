import React from 'react';
import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden,itemCount }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden} >
            <CartIconSvg className="shopping-icon" />
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    );
}

export default CartIcon;