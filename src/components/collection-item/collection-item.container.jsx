/**
 * 购物车实战(4): 使用client函数,带传入参数( 等待笔记 )
 */
import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';

// 获取client函数,有传入值时,写法( 等待笔记 )
    // a) 注意gql语法
const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart( $item: Item! ){
        addItemToCart( item: $item ) @client
    }
`;

// 容器模式: 注意组件传入参数( 等待笔记 )
const CollectionItemContainer = (props) => ( 
    <Mutation mutation={ADD_ITEM_TO_CART} >
        {
            addItemToCart => (
                <CollectionItem 
                    { ...props } 
                    addCartItem={ 
                        item => addItemToCart({ 
                            variables: {item} 
                        }) 
                    } 
                />
            )
        }
    </Mutation>
);

export default CollectionItemContainer;