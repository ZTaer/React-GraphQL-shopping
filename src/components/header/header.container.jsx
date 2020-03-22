/**
 * 购物车实战(1): 使用GraphQL的client数据 | 购物车隐藏按钮( 完成笔记 )
 */
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

import Header from './header.component';

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;
const CLEAR_CART_ITEM = gql`
    mutation ClearCartItem{
        clearCartItem @client
    }
`;

const GET_USER = gql`
    {
        currentUser @client
    }
`;
const CLEAR_CURRENT_USER = gql`
    mutation ClearCurrentUser{
        clearCurrentUser @client
    }
`;

const HeaderContainer = () => {
    const { data: { cartHidden } } = useQuery( GET_CART_HIDDEN );
    const { data: { currentUser } } = useQuery( GET_USER );
    const [ clearCurrentUser ] = useMutation(CLEAR_CURRENT_USER);
    const [ clearCartItem ] = useMutation(CLEAR_CART_ITEM);
    return <Header 
                clearCartItem={clearCartItem} 
                clearCurrentUser={clearCurrentUser} 
                hidden={ cartHidden } 
                currentUser={currentUser} 
            />;
} 

export default HeaderContainer;