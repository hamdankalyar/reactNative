import React,{useState} from "react";
import {Text,View,StyleSheet} from 'react-native';
import ColorDetail from "../components/ColorDetail";
const colorAdjustingScreen = ()=>{
    const COLOR_INCREAMENT = 15;
    const[red,setRed] =useState(0);
    const[green,setGreen] =useState(0);
    const[blue,setBlue] =useState(0);
    const setColor=(color,value)=>{
        switch (color) {
            case 'red':
                (red+value > 255 || red+value < 0) ? null : setRed(red + value);
                break;
            case 'green':
                (green + value > 255 || green + value < 0) ? null : setGreen(green + value);
                break;
            case 'blue':
                (blue +value > 255 || blue+value < 0) ? null : setBlue(blue + value);
                break;                
            default:
                break;
        }
    };
    return <View>
        <ColorDetail 
         title = "red"
         onIncrease={()=>setColor('red',1*COLOR_INCREAMENT)}
         onDecrease={()=>setColor('red',-1*COLOR_INCREAMENT)}
         ></ColorDetail>
        <ColorDetail
         title = "green"
         onIncrease={()=>setColor('green',1*COLOR_INCREAMENT)}
         onDecrease={()=>setColor('green',-1*COLOR_INCREAMENT)}
         ></ColorDetail>
        <ColorDetail 
        title = "blue"
        onIncrease={()=>setColor('blue',1*COLOR_INCREAMENT)}
        onDecrease={()=>setColor('blue',-1*COLOR_INCREAMENT)}
        ></ColorDetail>
        <View style={{height : 150,
        width : 150,
        backgroundColor:`rgb(${red},${green},${blue})`}}/>
        
    </View>
};
const styles=StyleSheet.create({
    
});
export default colorAdjustingScreen;