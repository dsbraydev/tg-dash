"use client";
import useData from "./hooks/useData";

const HomePage = () => {
  const { data, isLoading, isError } = useData("/profile");
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
