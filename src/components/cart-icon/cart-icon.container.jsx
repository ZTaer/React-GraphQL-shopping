/**
 * 购物车实战(2)实战: 使用GraphQL的client函数 | 购物车隐藏按钮( 等待笔记 )
 * 核心: Mutation标签
 */
import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './cart-icon.component';

// 获取client中的函数
const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

// 关于Mutation标签的使用, 在组件中使用client函数( 等待笔记 ) 
    // 0. 容器模式: 在容器模式下使用此标签
    // 1. 注意: 处理返回函数,注意传递函数的方式
    // 2. 常用: 改变client本地数据
const CartIconContainer = () => (
    <Mutation mutation={TOGGLE_CART_HIDDEN} >
        {
            toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />
        }
    </Mutation>
);

export default CartIconContainer;