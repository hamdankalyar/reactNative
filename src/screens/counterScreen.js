import React,{useState} from "react";
import { StyleSheet,Text,View,Button } from "react-native";
const counterScreen = () => {
    const [counter,setCounter]=useState(0);
    console.log(counter);
return <View>
    
    <Button title="Increase" onPress={()=>{
        setCounter(counter + 1);
    }}/>
    <Button title="Decrease" onPress={()=>{
        setCounter(counter - 1);
    }}/>
    <Text>Current Counter</Text>
    <Text>{counter}</Text>
</View> 
};
const styles = StyleSheet.create({

});
export default counterScreen;