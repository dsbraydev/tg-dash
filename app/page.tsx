"use client";
import useData from "./hooks/useData";
import Dashboard from "./components/Dashboard";
const HomePage = () => {
  const { data, isLoading, isError } = useData("/profile");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <Dashboard />
  );
};

export default HomePage;
