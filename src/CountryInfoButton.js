import React from 'react'

function CountryInfoButton({setCountryHomepage}) {
    function handleClick() {
        setCountryHomepage(true);    
    }
    return (
        <div>
            <button className="modeButton" onClick={handleClick}>Back</button>
        </div>
    )
}

export default CountryInfoButton
