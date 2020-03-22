import React from 'react';
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, deleteCartItem, addItemToCart, lowerCartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={ ()=>lowerCartItem(cartItem) } className="arrow">&#10094;</div>
                    <span className="value">
                        {quantity}
                    </span>
                <div onClick={ ()=>addItemToCart(cartItem) } className="arrow">&#10095;</div>
            </span>
            <span className="price">￥{price}</span>
            <span onClick={ ()=>deleteCartItem(cartItem) } className="remove-button">
                &#10006;
            </span>
        </div>
    );
}

export default CheckoutItem;