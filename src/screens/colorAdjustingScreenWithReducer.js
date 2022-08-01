import React,{useReducer} from "react";
import {Text,View,StyleSheet} from 'react-native';
import ColorDetail from "../components/ColorDetail";
const reducer = (state,action) =>{
    //state === {red:number,green:number,blue:number}
    //action =={colorToChange:'red',action.amount:15}

        switch (action.colorToChange) {
            case 'red':
               return {...state, red: state.red + action.amount};
                
            case 'green':
               
                return {...state, green: state.green + action.amount};
            case 'blue':
               
                return {...state, blue: state.blue + action.amount};
            default:
                break;
        }
    
};
const colorAdjustingScreenWithReducer = ()=>{ 
    const COLOR_INCREAMENT= 15;
    const [state,dispatch]=useReducer(reducer,{red:0,green:0,blue:0});
    // const {red,green,blue}=state;
    return <View>
        <ColorDetail 
         title = "red"
         onIncrease={()=>dispatch({colorToChange:'red',amount:COLOR_INCREAMENT})}
         onDecrease={()=>dispatch({colorToChange:'red',amount:-1*COLOR_INCREAMENT})}
         ></ColorDetail>
        <ColorDetail
         title = "green"
         onIncrease={()=>dispatch({colorToChange:'green',amount:COLOR_INCREAMENT})}
         onDecrease={()=>dispatch({colorToChange:'green',amount:-1*COLOR_INCREAMENT})}
         ></ColorDetail>
        <ColorDetail 
        title = "blue"
        onIncrease={()=>dispatch({colorToChange:'blue',amount:COLOR_INCREAMENT})}
        onDecrease={()=>dispatch({colorToChange:'blue',amount:-1*COLOR_INCREAMENT})}
        ></ColorDetail>
        <View style={{height : 150,
        width : 150,
        backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
        }}/>
    </View>
};
const styles=StyleSheet.create({
    
});
export default colorAdjustingScreenWithReducer;