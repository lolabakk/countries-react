import React from 'react'
import CountryBorderInfo from './CountryBorderInfo'
import CountryFlagInfo from './CountryFlagInfo'
import CountryInfoButton from './CountryInfoButton'

function DisplayCountryInfo({data, setCountryHomepage, countryData, setCountryData, darkMode}) {


    return (
        <div className={darkMode ? "displayColor" : ""}>
            <CountryInfoButton setCountryHomepage={setCountryHomepage}/>
            <CountryFlagInfo Countries={data} setCountryHomepage={setCountryHomepage} countryData={countryData}/>
            <CountryBorderInfo countryData={countryData} Countries={data} setCountryData={setCountryData}/>
        </div>
    )
} 

export default DisplayCountryInfo
