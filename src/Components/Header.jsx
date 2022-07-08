import React from 'react';


const Header = ( {onInput, functimp, searcher} ) => {

    return (
        <header>
            <div className='header'><input type="text" value={onInput} onChange={e => functimp(e.target.value)}/><button onClick={() => searcher()}><i className="fa-solid fa-magnifying-glass"></i></button></div>
        </header>
    );
};

export default Header;