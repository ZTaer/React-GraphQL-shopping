import React from 'react';

import "./checkout.styles.scss";

import { default as CheckoutItem } from '../../components/checkout-item/checkout-item.container';
import { default as StripeButton} from '../../components/stripe-button/stripe-button.container';

const CheckoutPage = ( {cartPriceTotal, cartItems} ) => {
    return(
        <div className="checkout-page">

            <div className="checkout-header">
                <div className="header-block">
                    <span>
                        产品
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        描述                        
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        数量
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        价格
                    </span>
                </div>

                <div className="header-block">
                    <span>
                        移除
                    </span>
                </div>
            </div>

            {
                cartItems.map( cur=>(<CheckoutItem key={cur.id} cartItem={cur} />) )
            }

            <div className="total">
                <span>
                    总和: ￥{cartPriceTotal}
                </span>
            </div>

            <StripeButton price={cartPriceTotal} />
            <div className="test-warning">
                <p>
                    <b>
                        Stripe测试信用卡支付(因面试所用暂未激活Stripe支付)<br/>
                    </b>
                        <b>卡号:</b> 4242 4242 4242 4242 <br/>
                        <b>密码:</b> 123 (任意3位) 
                        <b>时间:</b> 01/20 (任意月/年)
                </p>
            </div>

        </div>
    );
};

export default CheckoutPage;
