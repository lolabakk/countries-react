import React, {useState, useEffect} from 'react'

function SearchBar({data, setDisplayCountries}) {
    const[searchValue, setSearchValue]= useState("");
    const handleChange = (event)=>{
        setSearchValue(event.target.value)
    }
    useEffect(()=> {
        const filterCountry =data.filter((country)=>{
            return country.name.toLowerCase().includes(searchValue.toLowerCase())|| 
            country.capital.toLowerCase().includes(searchValue.toLowerCase())
        }) 
        setDisplayCountries(filterCountry)
    },[data, setDisplayCountries, searchValue])
    return (
        
      <input type="text" value={searchValue} placeholder="Search..." onChange={handleChange}/>
    )
}

export default SearchBar
