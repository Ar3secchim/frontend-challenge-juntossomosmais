import { useEffect, useState } from "react";

export function useFetch(url) {
  const [fetchState, setFetchState] = useState({
    data: [],
    loading: true,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao obter os dados");
      }
      
      const responseData = await response.json();
      setFetchState({ data: responseData, loading: false });
    } catch (error) {
      console.error(error);
      setFetchState({ data: [], loading: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data: fetchState.data,
    loading: fetchState.loading,
  };
}
