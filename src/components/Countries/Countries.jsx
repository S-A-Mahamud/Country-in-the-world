import { use } from "react";

import './countries.css';

import Country from "../Country/Country";

export default function Countries({ countriesPromises }) {

    const countriesData = use(countriesPromises);

    const countries = countriesData.countries;

    console.log(countries);

    return (
        <div>
            <h1 style={{'color':'white'}}>Countries on the world</h1>

            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} />)
                }
            </div>

        </div>
    )
}