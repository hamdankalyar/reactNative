import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import { Button } from "react-native";
const ColorDetail = (props)=>{
    return <View>
        <Text>
            {props.title}
        </Text>
        <Button onPress={() => props.onIncrease()} title={`Increase  ${props.title}`}/>
        <Button onPress={() => props.onDecrease()} title={`Decrease  ${props.title}`}/>
    </View>
};
const styles=StyleSheet.create({

});
export default ColorDetail;