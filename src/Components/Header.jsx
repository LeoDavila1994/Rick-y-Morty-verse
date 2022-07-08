import React from 'react';
import Input from './Input';


const Header = ( {onInput, functimp, searcher} ) => {

    return (
        <header>
            <div className='header'><Input onInput={onInput} functimp={functimp} searcher={searcher}/></div>
        </header>
    );
};

export default Header;