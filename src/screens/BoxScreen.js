import React from "react";
import {Text,StyleSheet} from 'react-native';
import { View } from "react-native";
const BoxScreen = () => {
    
    return <View style={styles.parentBox}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
        
    
};
const styles = StyleSheet.create({
    parentBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:200
    },
    box1:{
        height:100,
        width:100,
        backgroundColor:'red'
    },
    box2:{
        height:100,
        width:100,
        backgroundColor:'green',
        //marginTop:100
        alignSelf:'flex-end'
    },
    box3:{
        height:100,
        width:100,
        backgroundColor:'gray'
    },
    
});
export default BoxScreen;