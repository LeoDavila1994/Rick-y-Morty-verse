import React from 'react';
import Input from './Input';


const Header = ( {onInput, functimp, searcher, name} ) => {

    return (
        <header>
            <div className='header'><Input onInput={onInput} functimp={functimp} searcher={searcher} name={name}/></div>
        </header>
    );
};

export default Header;