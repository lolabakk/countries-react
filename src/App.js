import React, {useState} from 'react';
import './App.css';
import Countries from "./Countries.js";
import CountriesDetails from "./CountriesDetails";
import SearchBar from "./SearchBar";
import Regions from "./Regions";
import DisplayCountryInfo from "./DisplayCountryInfo";
import Heading from "./Heading";

function App() {  
  const [appDark, setAppDark]= useState(false)
  const [data]= useState(Countries)
  const [displayCountries, setDisplayCountries]= useState(Countries);
  const [countryHomepage, setCountryHomepage]= useState(true); 
  const [countryData, setCountryData]= useState({})
    const handleClick = () => {
        setAppDark(!appDark)
    }
    
  return (
    <div className = {`${appDark?"darkMode" : "lightMode"} wrapper`}>
     <div className="appWrapper">
       <Heading handleClick={handleClick}/>
       {countryHomepage ? 
       ( <>
        <div className="searchFilter">      
          <SearchBar data={data} setDisplayCountries={setDisplayCountries}/>
          <Regions data={data} setDisplayCountries={setDisplayCountries}/>
        </div>
        <div className={`countriesInfo ${appDark? "appDark" : ""}`}>
          {displayCountries.map(country =>{
            return <CountriesDetails Countries={country} setCountryHomepage={setCountryHomepage} setCountryData={setCountryData}/>    
          })}
        </div> 
        </> ):         
       <DisplayCountryInfo darkMode ={appDark} data ={data} setCountryHomepage={setCountryHomepage} countryData={countryData} setCountryData={setCountryData}/>     
     }
      </div>
    </div> 
  );
}

export default App;
