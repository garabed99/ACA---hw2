const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(array) {
  let sumOfAge = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfAge += array[i].age;
  }
  return sumOfAge / array.length;
}

console.log(getAverageAge(users));
