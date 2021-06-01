import React from 'react';
import { useStateValue } from '../context/StateProvider';
import '../css/CheckoutItem.css';
import FlipMove from 'react-flip-move';

function CheckoutItem({ id, image, title, rating, price, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <FlipMove typeName={null}>
            <div key={id} className="checkoutItem">

                <img src={image} alt="" className="checkoutItem__image" />

                <div className="checkoutItem__info">
                    <div className="checkoutItem__title">
                        {title}
                    </div>
                    <p className="checkoutItem__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutItem__rating">
                        {Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                    {!hideButton && (<button onClick={removeItem}>Remove item</button>)}

                </div>

            </div>
        </FlipMove>
    )
}

export default CheckoutItem
