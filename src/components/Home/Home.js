import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import './Home.css';

const Home = () => {

    const [countries, setCountries] = useState([]);
    // console.log(countries);

useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
}, []);

    return (
        <div className= "all-countries">
            {
                countries.map(country => <Countries countries={country} key= {Math.random()*1} ></Countries> )
            }
        </div>
    );
};

export default Home;