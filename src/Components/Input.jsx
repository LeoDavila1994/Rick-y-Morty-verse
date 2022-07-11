import React from 'react';


const Input = ( { onInput, functimp, searcher } ) => {

    return (
        <div>
            <input type="text" value={onInput} placeholder="Type between 1 - 126" onChange={e => functimp(e.target.value)}/><button onClick={() => searcher()} className="input-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
};

export default Input;