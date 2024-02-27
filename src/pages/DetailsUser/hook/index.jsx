export function searchUserByName(results, fullName) {
  for (let user of results) {
    const name = `${user.name.first} ${user.name.last}`;
    if (name.replace(" ", "").toLowerCase() === fullName.toLowerCase()) {
      return user;
    }
  }
  return null;
}
