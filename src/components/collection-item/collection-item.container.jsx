/**
 * useMutation调用函数( 有传递参数 )，方便全局使用函数，通常用于影响client数据( 完成笔记 )
 */
// a) 核心: gql语法是重点
// b) 模型 - 有参数时: const = [ 函数名称, { loading, error, data, called } ] = useMutation( 目标 )
// c) 注意: 
    // 0. 是‘[]’来接受传递来的函数
    // 1. '{}'大括号内的内容，可选择性删除，或者都不要
// d) 官方参考: https://www.apollographql.com/docs/react/api/react-hooks/#useapolloclient

import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart( $item: Item! ){
        addItemToCart( item: $item ) @client
    }
`;

const CollectionItemContainer = (props) => {
    const [ addItemToCart ] = useMutation( ADD_ITEM_TO_CART );

    return ( 
        <CollectionItem 
            { ...props } 
            addCartItem={ 
                item => addItemToCart({ 
                    variables: {item} 
                }) 
            } 
        />
    );
}

export default CollectionItemContainer;