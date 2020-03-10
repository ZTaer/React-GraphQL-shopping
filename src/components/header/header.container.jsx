/**
 * 购物车实战(1): 使用GraphQL的client数据 | 购物车隐藏按钮( 完成笔记 )
 */
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Header from './header.component';

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

const HeaderContainer = () => {
    const { data: { cartHidden } } = useQuery( GET_CART_HIDDEN );
    return <Header hidden={ cartHidden } />;
} 

export default HeaderContainer;