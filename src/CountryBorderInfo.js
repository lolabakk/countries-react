import React from 'react'

function CountryBorderInfo({countryData, Countries, setCountryData}) {
    const borderInfo= Countries.filter((currentCountry)=> {
        return countryData.borders.includes(currentCountry.alpha3Code)               
        }).map((country)=>country.name)
      
    const handleClick= (borderCountry)=>{  
       const [border] = Countries.filter((country) => {
        return country.name === borderCountry;
       })    
       console.log(border)
        setCountryData(border);
    }      
    return (
        <div>
           <h3>Border Countries</h3>
            {borderInfo.map((border)=>{          
            return <button className= "countryBorder" onClick={()=>handleClick(border)}>{border}</button>                        
                
            })}       
        </div>
    )
}

export default CountryBorderInfo
