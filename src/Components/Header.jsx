import React from 'react';
import Input from './Input';


const Header = ( { searcher, name} ) => {

    return (
        <header>
            <div className='header'><Input searcher={searcher} name={name}/></div>
        </header>
    );
};

export default Header;