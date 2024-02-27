import { useEffect, useState } from "react";

export function useFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const starOffset = 1 ;
  const endLimit = 200 ;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/page?page=${starOffset}&perPage=${endLimit}`
      );
      if (!response.ok) {
        throw new Error("Erro ao obter os dados");
      }
      const data = await response.json();
      setUsers(data);
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
    users,
    loading,
  };
}
