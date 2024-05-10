import React from 'react'
import './SettingsScreen.css'
const SettingsScreen = (props) =>
{
    return(
        <div style={{display: props.ScreenVisibility}}>
            <div className='SettingsTitle'>
                <h1>Settings</h1> <br/>
            </div>
            <div className='SettingsScreen'>
                <p>
                     <b>System of<br/>Measurement:</b><br/>Metric<br/>
                     <b>Font Size:</b><br/>10<br/>
                     <b>Brightness:</b><br/>Medium <br/>
                </p>
            </div>
        </div>
    ) 
    
}
export default SettingsScreen