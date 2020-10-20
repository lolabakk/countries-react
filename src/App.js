import React, {useState} from 'react';
import './App.css';
import Countries from "./Countries.js";
import CountriesDetails from "./CountriesDetails";
import SearchBar from "./SearchBar";
import Regions from "./Regions";
import DisplayCountryInfo from "./DisplayCountryInfo";

function App() {
  const [data]= useState(Countries)
  const [displayCountries, setDisplayCountries]= useState(Countries);
  const [countryHomepage, setCountryHomepage]= useState(true); 
  const [countryData, setCountryData]= useState({})

  return (
     <div>
       {countryHomepage ? 
       ( <>
        <div className="searchFilter">      
          <SearchBar data={data} setDisplayCountries={setDisplayCountries}/>
          <Regions data={data} setDisplayCountries={setDisplayCountries}/>
        </div>
        <div className="countriesInfo">
          {displayCountries.map(country =>{
            return <CountriesDetails Countries={country} setCountryHomepage={setCountryHomepage} setCountryData={setCountryData}/>    
          })}
        </div> 
        </> ):         
       <DisplayCountryInfo data ={data} setCountryHomepage={setCountryHomepage} countryData={countryData} setCountryData={setCountryData}/>     
     }
     </div> 
  );
}

export default App;
