import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
 import SearchScreen from './src/screens/SearchScreen';
 import ResturantDivComponent from './src/components/ResturantDivComponent';
 import SearchBar from './src/components/SearchBar';
const navigator = createStackNavigator({
  Search : SearchScreen,
  Div:ResturantDivComponent,
  Search : SearchBar
},
{
  initialRouteName : 'Search',
  defaultNavigationOptions:{
    title : 'Business Search'
  }
}
);
export default createAppContainer(navigator);
