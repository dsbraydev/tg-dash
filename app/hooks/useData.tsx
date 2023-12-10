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
      if (response.status === 404) {
        throw new Error("Resource not found");
      } else {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const useData = (url: string) => {
  const { data, error, mutate } = useSWR(url, () => fetchData(url), {
    revalidateOnMount: true,
    revalidateOnFocus: true,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount < 3) {
        const delay = Math.min(1000 * 2 ** retryCount, 30000);
        setTimeout(() => mutate(), delay);
      }

      console.error(
        `Error fetching data, retrying attempt ${retryCount + 1}:`,
        error.message
      );
    },
  });

  return {
    data,
    isLoading: !data && !error,
    isError: error,
    errorMessage: error ? error.message : null,
  };
};

export default useData;
