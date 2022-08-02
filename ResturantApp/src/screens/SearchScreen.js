import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results,setResults]=useState([]);

  const searchApi = async () =>{
    try{
    const response = await yelp.get('/search',{
      params:{
        limit:50,
        term:term,
        location:"san francesco"
      }
    });
    setResults(response.data.businesses);
  } catch(error){
    console.log(error)
  }
  };
  return (
    <View>
      <SearchBar
       term={term} 
       onTermChange={setTerm}
      onTermSubmint={searchApi}
        />
      
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;