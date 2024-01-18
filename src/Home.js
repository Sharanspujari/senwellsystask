import { useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
  const { data, getApiData } = useFetch();

  useEffect(() => {
    console.log("data:", data);
  }, [data]);
  return (
    <>
      <h2>NavBar</h2>
      <button onClick={getApiData}>Refresh to get data</button>
    </>
  );
};
export default Home;
