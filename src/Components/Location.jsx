import React from 'react';

const Location = ({ name, type, dimention, population }) => {
    return (
        <div className='location-container'>
            <div className='title'>
                <h2>{name}</h2>
            </div>
            <div className='info'>
                <div>
                    <p><strong>Type: </strong></p>
                    <p>" {type} "</p>
                </div>
                <div>
                    <p><strong>Dimention: </strong></p>
                    <p>" {dimention} "</p>
                </div>
                <div>
                    <p><strong>Population: </strong></p>
                    <p>" {population} "</p>
                </div>
            </div>
        </div>
    );
};

export default Location;