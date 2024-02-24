import { useEffect, useState } from "react";

export function useShort(allUsers, sortType) {
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    const sortUsers = () => {
      if (sortType === "name") {
        setSortedUsers(
          allUsers
            .slice()
            .sort((a, b) => a.name.first.localeCompare(b.name.first))
        );
      } else if (sortType === "lastName") {
        setSortedUsers(
          allUsers
            .slice()
            .sort((a, b) => a.name.last.localeCompare(b.name.last))
        );
      } else {
        setSortedUsers([...allUsers]);
      }
    };

    sortUsers();
  }, [allUsers, sortType]);

  return sortedUsers;
}
