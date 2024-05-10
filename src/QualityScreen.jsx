import React from 'react'
import './QualityScreen.css'
const QualityScreen = (props) =>
{
    return(
        <div style={{display: props.ScreenVisibility}}>
            <div className='QualityTitle'>
                <h1>Quality</h1><br/>
            </div>
            <div className='QualityScreen'>
                <p>
                     <b>Quality:</b><br/>{props.Quality}<br/>
                     <b>Freshness:</b><br/>{props.Freshness}<br/>
                     <b>Water Content:</b><br/>{props.WaterContent}<br/>
                </p>
            </div>
        </div>
    ) 
    
}
export default QualityScreen