import React from 'react';


const Input = ( { onInput, functimp, searcher } ) => {

    return (
        <div>
            <input type="text" value={onInput} onChange={e => functimp(e.target.value)}/><button onClick={() => searcher()}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
};

export default Input;