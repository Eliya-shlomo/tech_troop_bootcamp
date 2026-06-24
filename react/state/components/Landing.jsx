import React from 'react';

const Landing = ({ user, store }) => {

    const hottestItem = store.find(product => product.hottest === true);

    return (
        <div className="landing">
            <h1>Welcome, {user}</h1>
            {hottestItem && (
                <p>Our hottest item right now is: {hottestItem.item} for ${hottestItem.price}</p>
            )}
        </div>
    );
};

export default Landing;