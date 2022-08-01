import React,{useReducer} from "react";
import { StyleSheet,Text,View,Button } from "react-native";
const reduce =(state,action)=>{
    //state = 0
    //action = {value}

    return {...state,counter:state.counter + action.value}; 

}
const counterScreenWithReducer = () => {
    const [state,dispatch]=useReducer(reduce,{counter:0});
    
return <View>
    
    <Button title="Increase" onPress={()=>{
        dispatch({value:1})
    }}/>
    <Button title="Decrease" onPress={()=>{
        dispatch({value:-1})
    }}/>
    <Text>Current Counter</Text>
    <Text>{state.counter}</Text>
</View> 
};
const styles = StyleSheet.create({

});
export default counterScreenWithReducer;