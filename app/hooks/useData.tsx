import useSWR from 'swr';

const fetchData = async (url: string) => {
  const API = process.env.MY_API;
  const apiUrl = `${API}${url}`;

  const response = await fetch(apiUrl, {
    headers: {
      // No headers needed
    },
  });

  const data = await response.json();
  return data;
};

const useData = (url: string) => {
  const { data, error } = useSWR(url, () => fetchData(url));

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useData;
