import { useEffect, useState } from "react";

export function useGetStages() {
  const [allStates, setAllStates] = useState([]);
  const [loadingState, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/`);

      if (!response.ok) {
        throw new Error("Erro ao obter os dados");
      }
      
      const result = await response.json();
      const statesSet = new Set(result.map((data) => data.location.state));

      setAllStates([...statesSet]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    allStates,
    loadingState,
  };
}
