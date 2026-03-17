import './country.css';

export default function Countries({ country }) {

    /**
     *  { 
     * "name": { "common": "Jamaica", "official": "Jamaica" },
     *  "ccn3": { "ccn3": "388" },
     *  "currencies": { "currencies": { "JMD": { "name": "Jamaican dollar", "symbol": "$" } } }, 
     * "capital": { "capital": [ "Kingston" ] },
     *  "region": { "region": "Americas" },
     *  "languages": { "languages": { "eng": "English", "jam": "Jamaican Patois" } },
     *  "area": { "area": 10991 }, 
     * "cca3": { "cca3": "JAM" }, 
     * "population": { "population": 2961161 },
     *  "continents": { "continents": [ "North America" ] },
     *  "flags": { "flags": { "png": "https://flagcdn.com/w320/jm.png", "svg": "https://flagcdn.com/jm.svg", "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides" } } }
     */

    return (
        <div className="card">
            <img style={{
                'borderRadius' : '5px'
            }} src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h2>Name: {country?.name?.common}</h2>
            <p>Capital: {country?.capital?.capital?.[0]}</p>
            <p>Area: {country?.area?.area} km²</p>
            <p>Population: {country?.population?.population}</p>
            <p>Languages: {Object.values(country?.languages?.languages).join(', ')}</p>
            <button style={{
                'color' : 'white',
                'padding' : '10px',
                'border' : '1px solid white',
                'borderRadius' : '5px',
                'cursor' : 'pointer'
            }}>Not active</button>
        </div>
    )
}