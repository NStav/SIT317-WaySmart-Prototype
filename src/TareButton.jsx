import React from 'react'
import './TareButton.css'
const TareButton = (props) =>
{
    return(
        <div>
            <div className='TareButton'>
                <button onClick={props.function}></button>
            </div>
        </div>  
    ) 
}
export default TareButton