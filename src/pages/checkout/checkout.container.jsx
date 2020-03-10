/**
 * ApolloHooks实战(0): 初次尝试使用useQuery代替Query( 完成笔记 )
 * useQuery获取client数据
 *      a) 安装ApolloHooks: yarn add @apollo/react-hooks
 *      b) useQuery: 为立刻查询获取数据
 *          0. 大致流程:
 *              a) 配置: const { loading, error, data } = useQuery(GET_GREETING, {variables: { language: 'english' }} );
 *              b) 数据将立即进行查询获取
 *      c) useLazyQuery: 为手动查询获取数据
 *          0. 具体请查询: https://www.apollographql.com/docs/react/data/queries/
 *          1. 大致流程: 
 *              a) 配置: const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);
 *              b) 执行: onClick={() => getDog()}
 *              c) 如果一旦执行设定的函数，useLazyQuery将查询获取数据
 */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CheckoutPages from './checkout.component';

const GET_CART_ITEMS_AND_PRICE_TOTAL = gql`
    {
        cartItems @client,
        cartPriceTotal @client,
    }
 `;

const CheckoutPagesContainer = () => {
    
    // 使用useQuery获取数据
    const { data: { cartItems, cartPriceTotal } } = useQuery( GET_CART_ITEMS_AND_PRICE_TOTAL );
    
    return(
        <CheckoutPages 
            cartPriceTotal={cartPriceTotal} 
            cartItems={cartItems} 
        />
    );
}

export default CheckoutPagesContainer;