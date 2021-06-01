import React from 'react';
import { useStateValue } from '../context/StateProvider';
import '../css/Checkout.css';
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';
function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <h2 className="checkout__title">
                    Your shopping Basket
                     </h2>
                {basket.map(item => (
                    <CheckoutItem
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                ))}
            </div>
            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
