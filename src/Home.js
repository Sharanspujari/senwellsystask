import useFetch from "./useFetch";

const Home = () => {
  const { data, getApiData } = useFetch();
  console.log("data:",data);

  return (
    <>
      <h2>NavBar</h2>
    </>
  );
};
export default Home;
