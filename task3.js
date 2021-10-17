const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(array, objValue) {
  let filtered = array.filter((user) => user.isAstronaut === true);
  return filtered;
}

console.log(filterByField(users, "isAstronaut"));
