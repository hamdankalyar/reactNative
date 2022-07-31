import React, { useState } from "react";
import { Text, View, Button, StyleSheet,FlatList } from "react-native";

const colorChangerScreen = () => {
    const [color,setColor] =useState([]);
    
  return (
    <View>
      <Button title="Add Color" onPress={()=> setColor([...color,addColor()])
    } />
      
    <FlatList
    keyExtractor={rgbColor => rgbColor}
        data={color}
        renderItem={({item})=>{
            return <View
            style={{ height: 100, width: 100, backgroundColor: item}}
          />
        }}
    />
    </View>
  );
};
const addColor = ()=>{
    let red =Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;

}
const styles = StyleSheet.create({});
export default colorChangerScreen;
