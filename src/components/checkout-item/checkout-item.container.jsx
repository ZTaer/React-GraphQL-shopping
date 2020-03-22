import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import CheckoutItem from './checkout-item.component';

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart( $item: Item! ){
        addItemToCart( item: $item ) @client
    }
`;

const LOWER_CART_ITEM = gql`
    mutation LowerCartItem( $item: Item! ){
        lowerCartItem( item: $item ) @client
    }
`;

const DELETE_CART_ITEM = gql`
    mutation DeleteCartItem( $item: Item! ){
        deleteCartItem( item: $item ) @client
    }
`;

const CheckoutItemContainer = data => {
    const [ addItemToCart ] = useMutation(ADD_ITEM_TO_CART);
    const [ lowerCartItem ] = useMutation(LOWER_CART_ITEM);
    const [ deleteCartItem ] = useMutation(DELETE_CART_ITEM);
    return (
        <CheckoutItem 
            {...data} 
            addItemToCart = {
                item => addItemToCart({ variables: {item} })
            }
            lowerCartItem = {
                item => lowerCartItem({ variables: {item} })
            }
            deleteCartItem = {
                item => deleteCartItem({ variables: {item} })
            }
        />
    );
};
export default CheckoutItemContainer;