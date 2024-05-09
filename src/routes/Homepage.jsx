import React from 'react'
import Title from '../Title'
import Scale from "../Scale";
import Screen from "../Screen";
import PowerButton from '../PowerButton';
import ScaleImg from "../img/Scale(Figma).png"
//test fr
function Homepage() {

    var [status, setStatus] = React.useState('none')
    const PowerButtonClick = () => {
        status === "none" ? setStatus("block") : setStatus("none")
    }

    return(
    <div>
        <Title/>
        <Scale img = {ScaleImg}/>
        <div style={{display: status}}>
            <Screen
                Weight = "Weight: 0.0g"
                Calories = "Calories: 0"
                Macronutrients = "Macronutrients"
                Carbs = "Carbs: 0.0g"
                Fats = "Fats: 0.0g"
                Protein = "Protein: 0.0g"
                Sugars = "Sugars: 0.0g"
                Micronutrients = "Micronutrients"
                Line1 = ""
                Line2 = ""
                Line3 = ""
                Line4 = ""
            />
        </div>
        <PowerButton function = {PowerButtonClick}/>
    </div>
    );
}

export default Homepage