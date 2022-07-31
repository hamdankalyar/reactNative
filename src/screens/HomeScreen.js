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
  </View>
   
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
