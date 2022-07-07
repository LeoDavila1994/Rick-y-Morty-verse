import React from 'react';

const Location = ({ name, type, dimention, population }) => {
    return (
        <div className='location-container'>
            <div className='title'>
                <h2>{name}</h2>
            </div>
            <div className='info'>
                <p><strong>Type: </strong> {type}.</p>
                <p><strong>Dimention: </strong> {dimention}.</p>
                <p><strong>Population: </strong> {population}.</p>
            </div>
        </div>
    );
};

export default Location;