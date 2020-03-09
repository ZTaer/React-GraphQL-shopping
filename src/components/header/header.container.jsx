/**
 * 购物车实战(1): 使用GraphQL的client数据 | 购物车隐藏按钮( 等待笔记 )
 */
import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header.component';

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

const HeaderContainer = () => (
    <Query query={ GET_CART_HIDDEN } >
        {
            ( { data: { cartHidden } } )=>{
                return <Header hidden={ cartHidden } />;
            }
        }
    </Query>
);

export default HeaderContainer;