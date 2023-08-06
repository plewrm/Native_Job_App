import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env'

// const rapidapikey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': 'b2aaafbcaamsh39003a80bfb486ep1d03fejsn12d8e8cae4d9',
        // 'X-RapidAPI-Key': 'b2aaafbcaamsh39003a80bfb486ep1d03fejsn12d8e8cae4d9zgczxvc',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: { ...query },
    };
  console.log("See option data here",data);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
  
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert('There is an error')
        // console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };
  
    return { data, isLoading, error, refetch };
  };

export default  useFetch