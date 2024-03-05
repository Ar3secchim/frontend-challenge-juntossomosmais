import { useEffect, useState } from "react";

export function useShort(data, sortType) {
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    const sortUsers = () => {
      if (sortType === "name") {
        return setSortedUsers(
          data
            .slice()
            .sort((a, b) => a.name.first.localeCompare(b.name.first))
        );
      }

      if (sortType === "lastName") {
        return setSortedUsers(
          data
            .slice()
            .sort((a, b) => a.name.last.localeCompare(b.name.last))
        );
      }

      return setSortedUsers([...data]);
    };
    sortUsers();
  }, [data, sortType]);

  return sortedUsers;
}
