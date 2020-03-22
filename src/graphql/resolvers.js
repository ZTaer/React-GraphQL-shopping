/**
 * Apollo新的文件结构适合大型项目( 完成笔记 )
 */
import { gql } from 'apollo-boost';

import CartMutation from './cart/cart.mutation';
import { cartData } from './cart/cart.query';

import UserMutation from './user/user.mutation';
import { userData } from './user/user.query';

import DireMutation from './dire/dire.mutation';
import { direData } from './dire/dire.query';

// 创建: 突变函数语法类型登记表
export const typeDefs = gql`
    
    extend type Item{
        quantity: Int
    }

    extend type User{
        id: String!
        uid: String!
        createTime: String!
        photoURL: String!
        email: String!
        displayName: String!
    }

    extend type Dire{
        title: String!
        id: Int
    }

    extend type Mutation{
        # 购物车
        ToggleCartHidden: Boolean!
        AddItemToCart( item: Item! ): [Item]! # 这里声明的是返回数据的类型为数组,并且可以返回空数组,但是必须返回数组
        LowerCartItem( item: Item! ): [Item]!
        DeleteCartItem( item: Item! ): [Item]!
        ClearCartItem: [Item]!

        # 用户信息
        ChangeCurrentUser( user: User! ): User
        ClearCurrentUser: User

        # 菜单信息
        GetDireDataSections: [Dire]!
    }
`;

// 创建: 全局函数登记表
export const resolvers = {
    Mutation:{
        ...CartMutation,
        ...UserMutation,
        ...DireMutation,
    }
}

// 创建: 全局数据登记表
export const data = {
    ...cartData,
    ...userData,
    ...direData,
}