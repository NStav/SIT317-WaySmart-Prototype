import React from 'react'
import Title from '../Title'
import Scale from "../Scale";
import Screen from "../Screen";
import PowerButton from '../PowerButton';
import FoodButtons from '../FoodButtons';
import SettingsScreen from '../SettingsScreen';
import ScreenButtons from '../ScreenButtons';
import QualityScreen from '../QualityScreen';

import ScaleImg from "../img/Scale(Figma).png"
function Homepage() {

    var [status, setStatus] = React.useState('none')
    var [DefaultVis, setDefaultVis] = React.useState('block')
    var [DefaultQualityVis, setDefaultQualityVis] = React.useState('none')
    var [AppleVis, setAppleVis] = React.useState('none')
    var [AppleQualityVis, setAppleQualityVis] = React.useState('none')
    var [BeefVis, setBeefVis] = React.useState('none')
    var [BeefQualityVis, setBeefQualityVis] = React.useState('none')
    var [WatermelonVis, setWatermelonVis] = React.useState('none')
    var [WatermelonQualityVis, setWatermelonQualityVis] = React.useState('none')
    var [ChickenVis, setChickenVis] = React.useState('none')
    var [ChickenQualityVis, setChickenQualityVis] = React.useState('none')
    var [SettingsVis, setSettingsVis] = React.useState('none')
    var [CurrentFood, setCurrentFood] = React.useState('none')

    const PowerButtonClick = () => {
        status === "none" ? setStatus("block") : setStatus("none")

    }

    const AppleButtonClick = () => {
        if (AppleVis === "none"){
            setDefaultVis("none")
            setDefaultQualityVis('none')
            setAppleVis("block")
            setAppleQualityVis('none')
            setBeefVis("none")
            setBeefQualityVis('none')
            setWatermelonVis('none')
            setWatermelonQualityVis('none')
            setChickenVis('none')
            setChickenQualityVis('none')
            setSettingsVis('none')
            setCurrentFood('apple')
        }
        else {
            setAppleVis("none")
            setDefaultVis("block")
            setCurrentFood('none')
        }
    }

    const BeefButtonClick = () => {
        if (BeefVis === "none"){
            setDefaultVis("none")
            setDefaultQualityVis('none')
            setBeefVis('block')
            setBeefQualityVis('none')
            setAppleVis('none')
            setAppleQualityVis('none')
            setWatermelonVis('none')
            setWatermelonQualityVis('none')
            setChickenVis('none')
            setChickenQualityVis('none')
            setSettingsVis('none')
            setCurrentFood('beef')
        }
        else {
            setBeefVis("none")
            setDefaultVis("block")
            setCurrentFood('none')
        }
    }

    const WatermelonButtonClick = () => {
        if (WatermelonVis === "none"){
            setDefaultVis("none")
            setDefaultQualityVis('none')
            setWatermelonVis('block')
            setWatermelonQualityVis('none')
            setBeefVis('none')
            setBeefQualityVis('none')
            setAppleVis('none')
            setAppleQualityVis('none')
            setChickenVis('none')
            setChickenQualityVis('none')
            setSettingsVis('none')
            setCurrentFood('watermelon')
        }
        else {
            setWatermelonVis("none")
            setDefaultVis("block")
            setCurrentFood('none')
        }
    }

    const ChickenButtonClick = () => {
        if (ChickenVis === "none"){
            setDefaultVis("none")
            setDefaultQualityVis('none')
            setChickenVis('block')
            setChickenQualityVis('none')
            setWatermelonVis('none')
            setWatermelonQualityVis('none')
            setBeefVis('none')
            setBeefQualityVis('none')
            setAppleVis('none')
            setAppleQualityVis('none')
            setSettingsVis('none')
            setCurrentFood('chicken')
        }
        else {
            setChickenVis("none")
            setDefaultVis("block")
            setCurrentFood('none')
        }
    }

    const LeftButtonClick = () => {
        if (DefaultQualityVis === "block"){
            setDefaultQualityVis('none')
            setDefaultVis('block')
        }
        if (AppleQualityVis === "block"){
            setAppleQualityVis('none')
            setAppleVis('block')
        }

        else if (BeefQualityVis === "block"){
            setBeefQualityVis('none')
            setBeefVis('block')
        }

        else if (WatermelonQualityVis === "block"){
            setWatermelonQualityVis('none')
            setWatermelonVis('block')
        }

        else if (ChickenQualityVis === "block"){
            setChickenQualityVis('none')
            setChickenVis('block')
        }

        else if (SettingsVis === "block"){
            setSettingsVis('none')
            if (CurrentFood === 'none'){
                setDefaultQualityVis('block')
            }
            else if (CurrentFood === 'apple'){
                setAppleQualityVis('block')
            }
            else if (CurrentFood === 'beef'){
                setBeefQualityVis('block')
            }
            else if (CurrentFood === 'watermelon'){
                setWatermelonQualityVis('block')
            }
            else if (CurrentFood === 'chicken'){
                setChickenQualityVis('block')
            }
        }
    }

    const RightButtonClick = () => {

        if (DefaultVis === 'block'){
            setDefaultVis('none')
            setDefaultQualityVis('block')
        }
        else if (AppleVis === "block"){
            setAppleVis("none")
            setAppleQualityVis("block")
        }

        else if (BeefVis === "block"){
            setBeefVis("none")
            setBeefQualityVis("block")
        }

        else if (WatermelonVis === "block"){
            setWatermelonVis("none")
            setWatermelonQualityVis("block")
        }

        else if (ChickenVis === "block"){
            setChickenVis("none")
            setChickenQualityVis("block")
        }

        else if (DefaultQualityVis === 'block'){
            setDefaultQualityVis('none')
            setSettingsVis('block')
        }

        else if (AppleQualityVis === "block"){
            setAppleQualityVis("none")
            setSettingsVis('block')
        }

        else if (BeefQualityVis === "block"){
            setBeefQualityVis("none")
            setSettingsVis('block')
        }

        else if (WatermelonQualityVis === "block"){
            setWatermelonQualityVis("none")
            setSettingsVis('block')
        }

        else if (ChickenQualityVis === "block"){
            setChickenQualityVis("none")
            setSettingsVis('block')
        }
    }

    return(
    <div>
        <Title/>
        <Scale img = {ScaleImg}/>

        <div style={{display: status}}>
            <Screen
                //default screen
                Weight = "Weight: 0.0g"
                Calories = "Calories: 0"
                Macronutrients = "Macronutrients"
                Carbs = "Carbs: 0.0g"
                Fats = "Fats: 0.0g"
                Protein = "Protein: 0.0g"
                Sugars = "Sugars: 0.0g"
                Micronutrients = "Micronutrients"
                ScreenVisibility = {DefaultVis}
            />
            <QualityScreen
                //Default quality screen
                Quality = ""
                Freshness = ""
                WaterContent = ""
                ScreenVisibility = {DefaultQualityVis}
            />
            <Screen
                //apple screen
                Weight = "Weight: 200.0g"
                Calories = "Calories: 95"
                Macronutrients = "Macronutrients"
                Carbs = "Carbs: 25.0g"
                Fats = "Fats: 0.0g"
                Protein = "Protein: 1.0g"
                Sugars = "Sugars: 19.0g"
                Micronutrients = "Micronutrients"
                Line1 = "Fibre: 3.0g"
                Line2 = "Calcium: 0.1g"
                Line3 = "Iron: 0.1g"
                Line4 = "Potassium: 0.2g"
                Line5 = "Phosphorus: 0.2g"
                Line6 = "Vitamin C: 1.0g"
                ScreenVisibility = {AppleVis}
            />
            <QualityScreen
                //apple quality screen
                Quality = "High"
                Freshness = "5/5"
                WaterContent = "79%"
                ScreenVisibility = {AppleQualityVis}
            />
            <Screen
                //Beef screen
                Weight = "Weight: 300g"
                Calories = "Calories: 864"
                Macronutrients = "Macronutrients"
                Carbs = "Carbs: 0.0g"
                Fats = "Fats: 54.3g"
                Protein = "Protein: 78.9g"
                Sugars = "Sugars: 0.0g"
                Micronutrients = "Micronutrients"
                Line1 = "Vitamin D: 0.2g"
                Line2 = "Sodium: 0.2g"
                Line3 = "Iron: 0.8g"
                Line4 = "Potassium: 0.9g"
                Line5 = "Calcium: 0.3g"
                ScreenVisibility = {BeefVis}
            />
            <QualityScreen
                //Beef quality screen
                Quality = "Medium"
                Freshness = "4/5"
                WaterContent = "72%"
                ScreenVisibility = {BeefQualityVis}
            />
            <Screen
                //Watermelon screen
                Weight = "Weight: 294.0g"
                Calories = "Calories: 89"
                Macronutrients = "Macronutrients"
                Carbs = "Carbs: 21.5g"
                Fats = "Fats: 0.5g"
                Protein = "Protein: 2.1g"
                Sugars = "Sugars: 17.73g"
                Micronutrients = "Micronutrients"
                Line1 = "Fibre: 0.6g"
                Line2 = "Sodium: 0.4g"
                Line3 = "Vitamin A: 0.1g"
                Line4 = "Vitamin C: 0.1g"
                Line5 = "Potassium: 0.7g"
                ScreenVisibility = {WatermelonVis}
            />
            <QualityScreen
                //Watermelon quality screen
                Quality = "High"
                Freshness = "5/5"
                WaterContent = "92%"
                ScreenVisibility = {WatermelonQualityVis}
            />
            <Screen
                //Chicken screen
                Weight = "Weight: 300.0g"
                Calories = "Calories: 642"
                Macronutrients = "Macronutrients"
                Carbs = "Carbs: 0.3g"
                Fats = "Fats: 42.1g"
                Protein = "Protein: 70.6g"
                Sugars = "Sugars: 0.0g"
                Micronutrients = "Micronutrients"
                Line1 = "Sodium: 0.1g"
                Line2 = "Calcium: 0.3g"
                Line3 = "Iron: 0.1g"
                Line4 = "Potassium: 0.7g"
                ScreenVisibility = {ChickenVis}
            />
            <QualityScreen
                //Chicken quality screen
                Quality = "High"
                Freshness = "5/5"
                WaterContent = "75%"
                ScreenVisibility = {ChickenQualityVis}
            />
            <SettingsScreen ScreenVisibility = {SettingsVis} />
        </div>
        <PowerButton function = {PowerButtonClick}/>
        <FoodButtons 
            text1 = "apple"
            function1 = {AppleButtonClick}
            text2 = "watermelon" 
            function2 = {WatermelonButtonClick}
            text3 = "beef"
            function3 = {BeefButtonClick}
            text4 = 'chicken'
            function4 = {ChickenButtonClick}
        />
        <ScreenButtons
            function1 = {LeftButtonClick}
            function3 = {RightButtonClick}
        />
    </div>
    );
}

export default Homepage