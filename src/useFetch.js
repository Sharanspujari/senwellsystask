import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/1");
        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getApiData();
  }, ["https://dummyjson.com/products/1"]);
  return { data };
};
export default useFetch;
