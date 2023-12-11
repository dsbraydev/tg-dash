import useSWR from "swr";

const fetchDataWithRetries = async (url: string) => {
  const API = process.env.NEXT_PUBLIC_MY_API;
  const apiUrl = `${API}${url}`;

  let retries = 0;
  const maxRetries = 3;

  while (retries < maxRetries) {
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
      retries++;
      if (retries === maxRetries) {
        throw error; // Throw the error if maximum retries are reached
      }
    }
  }
};

const useRetry = (url: string) => {
  const { data, error } = useSWR(url, () => fetchDataWithRetries(url));

  return {
    data,
    isLoading: !data && !error,
    isError: error,
    errorMessage: error ? error.message : null,
  };
};

export default useRetry;
