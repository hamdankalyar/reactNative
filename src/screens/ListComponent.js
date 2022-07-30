import React from "react";
import {Text,StyleSheet} from 'react-native';
import { FlatList } from "react-native";
const ListComponent = ()=>{
    const friend = [
        {name:"friend 1",age:12},
        {name:"friend 2",age:13},
        {name:"friend 3",age:14},
        {name:"friend 4",age:15},
        {name:"friend 5",age:16},
        {name:"friend 6",age:17},
        {name:"friend 7",age:18}

    ];
    return <FlatList
    keyExtractor={friend => friend.name}
        data={friend}
        renderItem={({item})=> {
            return <Text style={styles.textStyle}>{item.name} age {item.age}</Text>
        }}
    />
};
const styles = StyleSheet.create({
    textStyle :{
        fontSize:20,
        marginVertical:50
    }
});
export default ListComponent;