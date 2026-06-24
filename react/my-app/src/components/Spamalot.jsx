import React from 'react';
import Spam from './Spam';

const Spamalot = () => {

    const spamArray = Array(500).fill(null);

    return (
        <div>
            {spamArray.map((_, index) => (
                <Spam key={index} />
            ))}
        </div>
    );
};

export default Spamalot;