import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HomeScreen changing checking</Text>
    <Button title='Navigate to ComponentScreen' onPress={()=>navigation.navigate('Components')} />
    <TouchableOpacity onPress={()=>navigation.navigate('List')}>
      <Text>Touch here to navigate to List Component</Text>
    </TouchableOpacity>
    <Button title='Navigate to ImageScreen' onPress={()=>navigation.navigate('ImageS')} />
    <Button title='Navigate to counterScreen' onPress={()=>navigation.navigate('counter')}/>
    <Button title='Navigate to colorChangerScreen' onPress={()=>navigation.navigate('colorChange')}/>
    <Button title='Navigate to colorAdjustingScreen' onPress={()=>navigation.navigate('colorAdjust')}/>
    <Button title ='Navigate colorAdjustingScreen with Reducer' onPress={()=>navigation.navigate('colorAdjustReducer')}/>
    <Button title ='Navigate counterScreen with Reducer' onPress={()=>navigation.navigate('counterReducer')}/>
    <Button title ='Navigate to InputNameScreen' onPress={()=>navigation.navigate('InputName')}/>
    <Button title ='Navigate to BoxScreen' onPress={()=>navigation.navigate('Box')}/>
  </View>
   
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
