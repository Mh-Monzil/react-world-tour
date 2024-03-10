import React, { useState } from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props)
    const {name,flags} = props.country;

    const [visited, setVisited] = useState(false);

    

    return (
        <div className='country'>
            <h1 className={visited ? 'skyblue': ''}>{name.common}</h1>
            <img src={flags.png} alt="" />
            <button onClick={() => setVisited(!visited)}>{visited ? 'visited' : 'Going'}</button>
        </div>
    );
};

export default Country;