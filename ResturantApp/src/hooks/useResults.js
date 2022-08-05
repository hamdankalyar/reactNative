import { useEffect,useState } from "react";
import yelp from "../api/yelp";
export default ()=>{
    const [results,setResults]=useState([]);
  const [errorMessage,setErrorMessage] = useState('');
  const searchApi = async (term) =>{
    try{
    const response = await yelp.get('/search',{
      params:{
        limit:50,
        term:term,
        location:"New York City"
      }
    });
    setResults(response.data.businesses);
  } catch(error){
    setErrorMessage('Something went Wrong');
  }
  };
  useEffect(()=>{
    searchApi('cake');
  },[]);
return [searchApi,results,errorMessage];
}