"use client";
import Dashboard from "./components/Dashboard";
// import useData from "./hooks/useData";

const HomePage = () => {
  // const { data, isLoading, isError } = useData("/profile");
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error loading data</div>;
  // }

  return <Dashboard />;
};

export default HomePage;
