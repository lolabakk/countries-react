import React from 'react'
import DarkModeButton from './DarkModeButton'

function Heading({handleClick}) {
    return (
        <div className="header">
           <h2>Where in the world is this</h2> 
           <DarkModeButton handleClick={handleClick}/>
        </div>
    )
}

export default Heading 
