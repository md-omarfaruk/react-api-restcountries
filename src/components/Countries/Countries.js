import React from 'react';
import { Link} from 'react-router-dom';
import './Countries.css';

const Countries = (props) => {

const {common} = props.countries.name;

    // console.log(props.countries)

    return (
        <div className="countryStyle">
            <h2>{common}</h2>
            <Link to={`/country/${common}`}><button className="about">About This Country</button></Link>
        </div>
    );
};

export default Countries;