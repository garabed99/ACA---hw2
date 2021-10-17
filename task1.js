Array.prototype.customSlice = function (start, end) {
  let newArr = [];

  //customSlice()
  if (start === undefined && end === undefined) {
    return this;
  }
  //customSlice(start)
  if (end === undefined && start > 0) {
    for (let i = start; i < this.length; i++) {
      newArr.push(this[i]);
    }
  }
  //customSlice(start, end)
  if (start !== undefined && end !== undefined)
    for (let i = start; i < end; i++) {
      newArr.push(this[i]);
    }
  //customSlice(start but negative)
  if (start < 0) {
    start += this.length;
    for (let i = start; i < this.length; i++) {
      newArr.push(this[i]);
    }
  }
  //customSlice(start > range)
  if (start > this.length) {
    return newArr;
  }
  //customSlice(end < 0)
  if (end < 0) {
    for (let i = start; i < this.length + end; i++) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.customSlice()); // expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant']
// console.log(animals.customSlice(2)); // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.customSlice(2, 4)); // expected output: Array ["camel", "duck"]
// console.log(animals.customSlice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.customSlice(-2)); // expected output: Array ["duck", "elephant"]
// console.log(animals.customSlice(2, -1)); // expected output: Array ["camel", "duck"]

Array.prototype.customSplice = function (start, deleteCount, ...item) {
  const data = this;
  let newArray = [];
};

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === -1) {
      return this[i];
    } else return undefined;
  }
};

// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.find((element) => element > 10)); // expected output: 12

Array.prototype.customMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// let numbers = [1, 4, 9];
// console.log(numbers);    //[1, 4, 9]
// console.log(numbers.customMap(function (num) {
//   return num * 2;
// }));     //[2, 8, 18]

Array.prototype.customFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(array.customFilter(isPrime)); // [2, 3, 5, 7, 11, 13]

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   console.log([12, 5, 8, 130, 44].customEvery(isBigEnough))   // false
//   console.log([12, 54, 18, 130, 44].customEvery(isBigEnough)) // true

Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }
// console.log([2, 5, 8, 1, 4].customSome(isBiggerThan10));     // false
// console.log([12, 5, 8, 1, 4].customSome(isBiggerThan10));    // true

Array.prototype.customReduce = function (callback, initialValue) {
  let acc = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {}
};

Array.prototype.reducer = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  if (accumulator == undefined && initialValue == undefined) {
    throw new Error("Type Error");
  }

  return accumulator;
};

//   const arr = [1, 3, 4];
//   const sum = (a, b) => a + b;
//   console.log(arr.reducer(sum, 0)); // logs 10
// const array1 = [1, 2, 1, 4];
// const reducer1 = (previousValue, currentValue) => previousValue + currentValue;
// // 1 + 2 + 3 + 4
// console.log(array1.reducer(reducer1));
// // expected output: 10
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reducer(reducer1));
// // expected output: 15
