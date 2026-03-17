import './country.css';
import { useState } from 'react';

export default function Countries({ country }) {

    const [active, setActive] = useState(false);

    return (
        <div className={`card ${active ? 'active-visited' : 'not-active-visited'}`}>
            <img style={{
                'borderRadius' : '5px'
            }} src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h2>Name: {country?.name?.common}</h2>
            <p>Capital: {country?.capital?.capital?.[0]}</p>
            <p>Area: {country?.area?.area} km²</p>
            <p>Population: {country?.population?.population}</p>
            <p>Languages: {Object.values(country?.languages?.languages).join(', ')}</p>
            <button style={{
                'color' : 'black',
                'padding' : '10px',
                'border' : '1px solid white',
                'borderRadius' : '5px',
                'cursor' : 'pointer'
            }} onClick={() => setActive(!active)}>
                {active ? 'Active' : 'Not Active'}
            </button>
        </div>
    )
}