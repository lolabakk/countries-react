import React from 'react'

function DarkModeButton({handleClick}) {
    return (
       <button className="modeButton"onClick ={handleClick}>Dark mode</button>
    )
}

export default DarkModeButton
