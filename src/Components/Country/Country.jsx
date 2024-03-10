import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props)
    const {name,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country : {name.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;