import React from 'react'

function CountriesDetails({Countries,setCountryHomepage, setCountryData}) {   
    const handleClick = () => {
        setCountryHomepage(false)
        setCountryData(Countries)
        
    }
            return (
        <div className="countryDetail" onClick={handleClick}> 
            <img className="countriesFlag" src={Countries.flag} alt=""/>
            <ul>
                <li>{Countries.name}</li> 
                <li><b>Capital</b>:  {Countries.capital}</li>                           
                <li><b>Population</b>: {Countries.population.toLocaleString()}</li>
                <li><b>Region</b>: {Countries.region}</li>
            </ul>
        </div>
    )
}

export default CountriesDetails
