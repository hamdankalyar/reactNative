import React  from "react";
import { View ,Text,Image} from "react-native";

const ImageDetail = (props)=>{
   return <View>
        <Image source={props.imageSource}></Image>
        <Text>
            {props.title} 
        </Text>
        <Text>
        score - {props.score}
        </Text>
    </View>
}
export default ImageDetail;