import React from "react";
import { Text,StyleSheet,View,Image, FlatList } from "react-native";
import ResultsDetails from './ResultsDetails';
const ResturantDivComponent=({title,results})=>{
    return <View style={styles.view}>
        <Text style = {styles.heading}>{title}</Text>
        
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return <ResultsDetails result = {item}></ResultsDetails>
        }}
        />
        
    </View>
};
const styles = StyleSheet.create({
heading : {
    fontSize:19,
    fontWeight:'bold',
    marginBottom:10,
},
view:{
    marginBottom:10,
    marginLeft: 15,
    borderRadius:10
}
});
export default ResturantDivComponent;