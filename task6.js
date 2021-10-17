function getScrabbleScore(word) {
  let characters = { 
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, 
    d: 2, g: 2, 
    b: 3, c: 3, m: 3, p: 3, 
    f: 4, h: 4, v: 4, w: 4, y: 4, 
    k: 5, 
    j: 6, x: 6, 
    q: 7, z: 7 
  };
  let sum = 0;

  if(word !== undefined) {
    word = word.toLowerCase();
  } else return 0;

  for (let i = 0; i < word.length; i++) {
      sum += characters[word[i]]; 
  }
  return sum;
};

console.log(getScrabbleScore("another"));
console.log(getScrabbleScore("quick"));
