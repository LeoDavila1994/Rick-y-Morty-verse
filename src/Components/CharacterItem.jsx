import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Status from './Status';

const CharacterItem = ( { character } ) => {

    const [ charCard, setCharCard ] = useState({})

    useEffect(() => {
        axios.get(character)
            .then(res => setCharCard(res.data))
    },[]);

    return (
        <div className='card'>
            <div className='img-cont'>
                <img src={charCard.image} alt="" />
            </div>
            <div className='card-info'>
                <p><strong>Name:</strong> {charCard.name}.</p>
                <div><strong>Status:</strong> <div className='status'><Status charStatus={charCard.status}/></div>{charCard.status}.</div>
                <p><strong>Origin:</strong> {charCard.origin?.name}.</p>
                <p><strong>Episodes:</strong> {charCard.episode?.length}.</p>
            </div>
        </div>
    );
};

export default CharacterItem;