import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

import CartIcon from './cart-icon.component';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const GET_CART_ITEMS_COUNT = gql`
    {
        cartItemsCount @client,
    }
 `;

const CartIconContainer = () => {
    const { data: { cartItemsCount } } = useQuery( GET_CART_ITEMS_COUNT );
    const [ toggleCartHidden ] = useMutation( TOGGLE_CART_HIDDEN );

    return (
        <CartIcon 
            itemCount={cartItemsCount}  
            toggleCartHidden={toggleCartHidden} 
        />
    );
}

export default CartIconContainer;