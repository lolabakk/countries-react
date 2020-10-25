import React from 'react'
function CountryFlagInfo({Countries, countryData}) {
    const countryLang = countryData.languages.map((item) => item.name);
        
  
       
    return (
        <div className="flagInfo"> 
            <img className="flagImage" src={countryData.flag} alt=""/>
              <h1>{countryData.name}</h1> 
            <ul className="flagCountryInfo">
                 
                <li><b>Native Name</b>: {countryData.name.toLocaleString()}</li>                         
                <li><b>Population</b>: {countryData.population.toLocaleString()}</li>
                 <li><b>Region</b>: {countryData.region}</li>
                <li><b>Sub-Region</b>: {countryData.subregion}</li>                    
                <li><b>Capital</b>:  {countryData.capital}</li>               
            </ul>
            <ul>                                                           
                <li><b>Top-Level Domain</b>: {countryData.topLevelDomain}</li>
                <li><b>Currencies</b>: {countryData.currencies.map((item)=> item.name)}</li>
                <li><b>Languages</b>: {countryLang.join(", ")}</li>
           </ul>           
          
        </div>
    ) 
       
  }   
export default CountryFlagInfo
