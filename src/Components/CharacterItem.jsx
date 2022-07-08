import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CharacterItem = ( { character } ) => {

    const [ charCard, setCharCard ] = useState({})

    useEffect(() => {
        axios.get(character)
            .then(res => setCharCard(res.data))
    },[]);

    console.log(charCard);

    return (
        <div className='card'>
            <div className='img-cont'>
                <img src={charCard.image} alt="" />
            </div>
            <p><strong>Name:</strong> {charCard.name}.</p>
            <p><strong>Status:</strong> {charCard.status}.</p>
            <p><strong>Origin:</strong> {charCard.origin?.name}.</p>
            <p><strong>Episodes:</strong> {charCard.episode?.length}.</p>
        </div>
    );
};

export default CharacterItem;