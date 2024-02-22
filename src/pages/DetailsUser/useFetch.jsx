import { useEffect, useState } from "react";

export function useFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [itensPerPage, setItensPerPage] = useState(9);

  const pages = Math.ceil(users.length / itensPerPage);

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(200);
  const starOffset = offset;
  const endLimit = limit;

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
    currentUsers,
    currentPage,
    itensPerPage,
    pages,
    setCurrentPage,
    setItensPerPage,
  };
}
