import React ,{useState}from "react";
import {Text,StyleSheet,TextInput} from 'react-native';
import { View } from "react-native";
const InputNameScreen = () => {
    const [name,setName]=useState("");
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue)=>{
                setName(newValue)
            }}/>
            <Text>your name is {name}</Text>
            {name.length<=5?<Text>name must be greater than 5</Text>:null}

        </View>
    )
};
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
    
});
export default InputNameScreen;