import { gql } from 'apollo-boost';

// 购物车要使用全局变量
export const cartData = {
    cartHidden: false,
    cartItems: [],
    cartItemsCount: 0,
    cartPriceTotal: 0,
}

// 获取全局数据的gql语法
const CART_GQL = {
    GET_CART_HIDDEN : gql`
        {
            cartHidden @client,
        }
    `,
    GET_CART_ITEMS : gql`
        {
            cartItems @client,
        }
    `,
    GET_CART_ITEMS_COUNT : gql`
        {
            cartItemsCount @client,
        }
    `,
    GET_CART_PRICE_TOTAL : gql`
        {
            cartPriceTotal @client,
        }
    `,
}

export default CART_GQL;
