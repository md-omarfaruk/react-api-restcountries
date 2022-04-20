import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {

    const {countryName} = useParams();
    
    const [country, setCountry] = useState({});
    console.log(country[0].name);
    
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
         fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, []);

    // console.log(country.name.common);

    return (
        <div>
            {/* <h1>{country.name.common}</h1> */}
        </div>
    );
};

export default CountryInfo;