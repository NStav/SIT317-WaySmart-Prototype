import React from 'react'
import './Food.css'
const Food = (props) =>
{
    return(
        <div className='Food' style={{display: props.Visibility}}>
            <img src={props.img} alt="img" />
        </div>     
    ) 
}
export default Food