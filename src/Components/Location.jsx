import React from 'react';

const Location = ({ name, type, dimention, population }) => {

    console.log(population)

    if (population === 0) {
        return (
            <>
                <div className='location-container'>
                    <div className='title'>
                        <h2>{name}</h2>
                    </div>
                    <div className='info'>
                        <p><strong>Type:</strong> {type}</p>
                        <p><strong>Dimension:</strong> {dimention}</p>
                        <p><strong>Population:</strong> {population}</p>
                    </div>
                </div>
                <div className='warning'>
                    <div className='war-bord'>
                        <h2>Warning</h2>
                        <p>Dimension without population to search in another dimension reload the page or in the search engine navigate among the 126 existing dimensions</p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
        <div className='location-container'>
            <div className='title'>
                <h2>{name}</h2>
            </div>
            <div className='info'>
                <p><strong>Type:</strong> {type}</p>
                <p><strong>Dimension:</strong> {dimention}</p>
                <p><strong>Population:</strong> {population}</p>
            </div>
        </div>
        )
    }


};

export default Location;