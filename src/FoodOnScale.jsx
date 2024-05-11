import React from 'react'
import './FoodOnScale.css'
const FoodOnScale = (props) =>
{
    return(
        <div className='FoodOnScale' style={{display: props.Visibility}}>
            <img src={props.img} alt="img" />
        </div>     
    ) 
    
}
export default FoodOnScale