import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
const ResultsDetails = ({result})=>{
    return <View style={styles.view}>
        <Image style={styles.image} source={{uri : result.image_url}} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        
    </View>
};
const styles = StyleSheet.create({
    image:{
        width:300,
        height:200,
        marginRight: 20,
        borderRadius:10,
        marginBottom:10
    },
    view:{
        // marginHorizontal:10
    },
    name:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10
    }
});
export default ResultsDetails;