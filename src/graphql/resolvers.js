/**
 * Apollo新的文件结构适合大型项目( 完成笔记 )
 */
import { gql } from 'apollo-boost';

import CartMutation from './cart/cart.mutation';
import { cartData } from './cart/cart.query';

// 创建: 突变函数语法类型登记表
export const typeDefs = gql`
    extend type Item{
        quantity: Int
    }
    extend type Mutation{
        ToggleCartHidden: Boolean!
        AddItemToCart( item: Item! ): [Item]!
    }
`;

// 创建: 全局函数登记表
export const resolvers = {
    Mutation:{
        ...CartMutation,
    }
}

// 创建: 全局数据登记表
export const data = {
    ...cartData,
}