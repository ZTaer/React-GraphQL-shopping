/**
 * 购物车实战(0): 构建resikvers.js使graphql的数据全局调用( 等待笔记 )
 */
// 0. 导入必备库
import { gql } from 'apollo-boost';

import { addItemToCart } from './cart.utility'; // 可选: 给购物车加工

// 1. 构建突变类型
    // a) 不要忘记定义变量类型,如Item中的quantity( 产品数量 )
 export const typeDefs = gql`
    extend type Item{
        quantity: Int
    }
    
    extend type Mutation{
        ToggleCartHidden: Boolean!
        AddItemToCart( item: Item! ): [Item]!
    }
 `;

// 2. 构建获取指定数据的gql语法
    // a) 注意: xxx @client - 为指向本地client数据, 没有":"符号
 const GET_CART_HIDDEN = gql`
    {
        cartHidden @client,
    }
 `;
 const GET_CART_ITEMS = gql`
    {
        cartItems @client,
    }
 `;

// 3. 构建突变: 读取/改写，指定数据
 export const resolvers = {
     // a) 构建的改写函数要写在突变(Mutation)中，这是规则
        // 0. 默认参数解析:
            // a) _root: 为空对象，代表在顶级位置的数据，
            // b) _args: 给函数传递参数
            // c) _context: 可以让我们访问缓存里的数据，以及client里的数据，{ cache }代表只访问缓存里的数据
            // d) _info: 包含一些介绍信息状态信息，不强求，可以选择删除
     Mutation: {

         // b) 购物车菜单隐藏/显示函数 | 简便写法: toggleCartHidden: ( _root, _args, { cache } ) => {}
         toggleCartHidden: ( _root, _args, _context, _info ) => {
            const { cache } = _context;
            
            // c) cache.readQuery: 获取指定数据
            const { cartHidden } = cache.readQuery({ 
                query: GET_CART_HIDDEN 
                // variables: 传递的参数,根据情况,可选择不写 
            });
            
            // d) cache.writeQuery: 修改指定的数据
            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden },
            });

            return !cartHidden; // 返回处理后的数据
         },

         // c) 购物车添加商品函数 | 简便写法: addItemToCart: ( _root, { xxx }, { cache } )
         addItemToCart: ( _root, _args, _context  ) => {
            const { item } = _args; // 传入的参数
            const { cache } = _context;

            // 获取client中的购物车数据
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            });

            // 加工处理数据
            const newCartItems = addItemToCart( cartItems, item );

            // 改写client中的购物车数据
            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            return newCartItems;
         }

     }
 }