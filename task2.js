function toAcronym(sentence) {
    let splitSentence = sentence.trim().split(" ");
    let acronymArr = [];

    for(let i = 0; i < splitSentence.length; i++) {
        acronymArr.push(splitSentence[i].charAt(0));
    }

    return acronymArr.join("").toUpperCase();
} 

console.log(toAcronym("Prisoner of War"));
console.log(toAcronym("Have a good night"));
