/**
 * 购物车实战(3): 渲染购物车菜单列表 | gql使用函数以及传递数据,混合使用( 等待笔记 )
 *      a) Mutation+Query标签混合使用
 */
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

// 获取client中的函数
const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const CartDropdownContainer = () => (
    <Mutation mutation={TOGGLE_CART_HIDDEN} > 
        {
            toggleCartHidden => (
                <Query query={GET_CART_ITEMS} >
                    {
                        ({ data: { cartItems } })=>(
                            <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden}  />
                        )
                    }
                </Query>
            )
        }
        
    </Mutation>
);

export default CartDropdownContainer;