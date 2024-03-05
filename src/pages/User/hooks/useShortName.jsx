import { useEffect, useState } from "react";

export function useShort(allUsers, sortType) {
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    const sortUsers = () => {
      if (sortType === "name") {
        return setSortedUsers(
          allUsers
            .slice()
            .sort((a, b) => a.name.first.localeCompare(b.name.first))
        );
      }

      if (sortType === "lastName") {
        return setSortedUsers(
          allUsers
            .slice()
            .sort((a, b) => a.name.last.localeCompare(b.name.last))
        );
      }

      return setSortedUsers([...allUsers]);
    };
    sortUsers();
  }, [allUsers, sortType]);

  return sortedUsers;
}
