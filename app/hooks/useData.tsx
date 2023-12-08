import useSWR from "swr";

const fetchData = async (url: string) => {
  const API = process.env.MY_API;
  const apiUrl = `${API}${url}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        // No headers needed
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const useData = (url: string) => {
  const { data, error } = useSWR(url, () => fetchData(url));

  return {
    data,
    isLoading: !data && !error,
    isError: error,
    errorMessage: error ? error.message : null,
  };
};

export default useData;
