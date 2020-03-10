import CART_GQL from './cart.query';

import { 
    addItemToCart, 
    selectCartItemsCount,
    selectCartPriceTotal,
} from './cart.utility';

const CartMutation = {

    // b) 购物车菜单隐藏/显示函数 | 简便写法: toggleCartHidden: ( _root, _args, { cache } ) => {}
    toggleCartHidden: ( _root, _args, _context, _info ) => {
       const { cache } = _context;
       
       // c) cache.readQuery: 获取指定数据
       const { cartHidden } = cache.readQuery({ 
           query: CART_GQL.GET_CART_HIDDEN 
           // variables: 传递的参数,根据情况,可选择不写 
       });
       
       // d) cache.writeQuery: 修改指定的数据
       cache.writeQuery({
           query: CART_GQL.GET_CART_HIDDEN,
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
           query: CART_GQL.GET_CART_ITEMS
       });

       // 加工处理数据
       const newCartItems = addItemToCart( cartItems, item );
       
       // 商品数增加
       cache.writeQuery({
           query: CART_GQL.GET_CART_ITEMS_COUNT,
           data: { cartItemsCount: selectCartItemsCount(newCartItems) },
       });

       // 价格总计
       cache.writeQuery({
           query: CART_GQL.GET_CART_PRICE_TOTAL,
           data: { cartPriceTotal: selectCartPriceTotal(newCartItems) },
       });

       // 改写client中的购物车数据
       cache.writeQuery({
           query: CART_GQL.GET_CART_ITEMS,
           data: { cartItems: newCartItems }
       });

       return newCartItems;
    }

}

export default CartMutation;