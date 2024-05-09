import React from 'react'
import './PowerButton.css'
const PowerButton = (props) =>
{
    return(
        <div className='PowerButton'>
            <button onClick={props.function}>{props.text}</button>
        </div>     
    ) 
    
}
export default PowerButton