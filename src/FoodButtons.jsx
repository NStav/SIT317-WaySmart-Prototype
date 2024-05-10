import React from 'react'
import './FoodButtons.css'
const FoodButtons = (props) =>
{
    return(
        <div>
            <div className='FoodButtons1'>
                <button onClick={props.function1}>{props.text1}</button>
            </div>
            <div className='FoodButtons2'>
                <button onClick={props.function2}>{props.text2}</button>
            </div>
            <div className='FoodButtons3'>
                <button onClick={props.function3}>{props.text3}</button>
            </div>
            <div className='FoodButtons4'>
                <button onClick={props.function4}>{props.text4}</button>
            </div>
        </div>               
    ) 
}
export default FoodButtons