import React from "react";
import {Text,StyleSheet} from 'react-native';
import { View } from "react-native";
const ComponentName = () => {
    const name = "hamdan";
    return (
        <View>
            <Text style={styles.textStyleHeader}>Getting started with react native </Text>
            <Text style={styles.textStyle}>{name}</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    textStyleHeader:{
        fontSize:45
    },
    textStyle:{
        fontSize:20 
    }
});
export default ComponentName;