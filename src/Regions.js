import React, {useState, useEffect} from 'react'

function Regions({data, setDisplayCountries}) {
    const [value, setValue]=useState("");    
    const handleChange = (event)=>{
        setValue(event.target.value)
    }
    useEffect(()=> {
        const selectedCountry =data.filter((country)=>{
            return country.region.toLowerCase()=== value.toLowerCase();
        }) 
        if(value ==="" || value === "default"){
            setDisplayCountries(data)  
       }else{
            setDisplayCountries(selectedCountry)
        }
    },[data, setDisplayCountries, value])
  

    return (
     <select className="selectRegions" name="regions" id="regions" onChange={handleChange}>
         <option value="default">All Regions</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="polar">Polar</option>
    </select>
    )
}

export default Regions
