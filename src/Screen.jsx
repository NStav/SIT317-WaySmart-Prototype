import React from 'react'
import './Screen.css'
const Screen = (props) =>
{
    return(
        <div style={{display: props.ScreenVisibilty}}>
            <div className='Screen'>
                <p>
                    {props.Weight} <br/>
                    {props.Calories} <br/>
                </p>
            </div>
            <div className='ScreenTitle'>
                {props.Macronutrients} <br/>
            </div>
            <div className='Screen2'>
                <p>
                    {props.Carbs} <br/>
                    {props.Fats} <br/>
                    {props.Protein} <br/>
                    {props.Sugars} <br/>
                </p>
            </div>
            <div className='ScreenTitle2'>
                {props.Micronutrients} <br/>
            </div>
            <div className='Screen3'>
                <p>
                    {props.Line1} <br/>
                    {props.Line2} <br/>
                    {props.Line3} <br/>
                    {props.Line4} <br/>
                    {props.Line5} <br/>
                </p>
            </div>
        </div>
    ) 
    
}
export default Screen