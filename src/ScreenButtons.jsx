import React from 'react'
import './ScreenButtons.css'
const ScreenButtons = (props) =>
{
    return(
        <div>
            <div className='ScreenButton1'>
                <button onClick={props.function1}>{props.text}</button>
            </div>
            <div className='ScreenButton2'>
                <button onClick={props.function2}>{props.text}</button>
            </div>
            <div className='ScreenButton3'>
                <button onClick={props.function3}>{props.text}</button>
            </div>
        </div>  
    ) 
}
export default ScreenButtons