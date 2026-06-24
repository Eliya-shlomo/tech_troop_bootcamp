import React from 'react';

const Item = ({ item, price, discount, shouldDiscount }) => {

    const finalPrice = shouldDiscount 
        ? price * (1 - discount) 
        : price;

    return (
        <>
            <div className='item-card'>
                <h3>{item}</h3>
                <p>Price: {finalPrice}</p>
            </div>
        </>
    );
}

export default Item;