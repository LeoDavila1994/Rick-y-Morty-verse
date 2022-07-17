import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Input = ({ searcher }) => {

    const [onInput, setOnInput] = useState("");
    const [locationSuggestions, setLocationSuggestions] = useState([])

    useEffect(() => {
        if (onInput !== ""){
            axios.get(`https://rickandmortyapi.com/api/location/?name=${onInput}`)
            .then(res => setLocationSuggestions(res.data.results));
        } else{
            setLocationSuggestions([]);
        }
    }, [onInput]);

    const resetOnClick = (location) => {
        setOnInput("");
        searcher(location);
    }

    return (
        <div className='input-suges'>
            <div>
                <div>
                    <input type="text" value={onInput} placeholder="Type some location" onChange={e => setOnInput(e.target.value)} />
                </div>
            </div>
            <div className='position-txt'>
                {locationSuggestions.map(location => (
                    <div className='suggestions' key={location.id} onClick={() => resetOnClick(location)}>{location.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Input;