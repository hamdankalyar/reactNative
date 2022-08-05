import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResturantDivComponent from '../components/ResturantDivComponent';
import useResults from '../hooks/useResults';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi,results,errorMessage]=useResults();
  const filterResultsByPrices =(price) => {
    //price === $ || $$  || $$$
    return results.filter(result => {
      return result.price ===price;
    });
  };
    return (
    <ScrollView>
      <SearchBar
       term={term} 
       onTermChange={setTerm}
      onTermSubmint={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <ResturantDivComponent results={filterResultsByPrices('$')} title = "Cost Effective"></ResturantDivComponent>
        <ResturantDivComponent results={filterResultsByPrices('$$')} title = "Bit Pricer"></ResturantDivComponent>
        <ResturantDivComponent results={filterResultsByPrices('$$$')} title = "Big Spender"></ResturantDivComponent>
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;