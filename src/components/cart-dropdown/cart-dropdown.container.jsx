/**
 * 实战方式一: useMutation()无参数，调用client函数
 */
import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

import CartDropdown from './cart-dropdown.component';

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const CartDropdownContainer = () => {
    // useMutation调用函数( 无传递参数 )，方便全局使用函数，通常用于影响client数据( 完成笔记 )
        // a) 模型 - 无参数时: const = [ 函数名称, { loading, error, data, called } ] = useMutation( 目标 )
        // b) 注意: 
            // 0. 是‘[]’来接受传递来的函数
            // 1. '{}'大括号内的内容，可选择性删除，或者都不要
        // c) 官方参考: https://www.apollographql.com/docs/react/api/react-hooks/#useapolloclient

    //全式: const [ toggleCartHidden, { loading, error, data, called } ] = useMutation(TOGGLE_CART_HIDDEN);
    const [ toggleCartHidden ] = useMutation(TOGGLE_CART_HIDDEN);
    const { data: { cartItems } } = useQuery(GET_CART_ITEMS);
    return <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden}  />
}

export default CartDropdownContainer;