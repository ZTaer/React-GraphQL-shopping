import React from 'react';
import "./collection-item.styles.scss";

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ item, addCartItem }) => {
    const {name, imageUrl, price } = item;
    return(
        <div className="collection-item">
            <div 
            className="image"
            style={
                {
                    backgroundImage: `url(${imageUrl})`,
                }
            }
            >
                <CustomButton onClick={ ()=>addCartItem(item) } selfCss={'collection-item-btn'} >
                    加入购物车
                </CustomButton>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}￥</span>
            </div>
        </div>
    );
}


export default CollectionItem;