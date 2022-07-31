import React  from "react";
import { View ,Text} from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = ()=>{
   return <View>
        
            <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg') }score={9} ></ImageDetail>
            <ImageDetail title="beach" imageSource={require('../../assets/beach.jpg') }score={8}></ImageDetail>
            <ImageDetail title="mountain" imageSource={require('../../assets/mountain.jpg')}score={10}></ImageDetail>
        
    </View>
}
export default ImageScreen;