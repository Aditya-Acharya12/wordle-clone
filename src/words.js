import wordBank from "./wordle-bank.txt";
export const gridDefault = [
["", "", "", "", ""], 
["", "", "", "", ""],
["", "", "", "", ""], 
["", "", "", "", ""], 
["", "", "", "", ""],
["", "", "", "", ""]];

export const generateWordSet = async() => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank).then((response) => response.text()).then((result)=> {
        const wordArr = result.split("\n");
        todaysWord = wordArr[Math.floor(Math.random()*wordArr.length)];
        wordSet = new Set(wordArr);
    })
    return { wordSet, todaysWord };
};
//we use set instead of an arry as for an array we have to traverse through the entire array to check if element 
//is present or not O(n), but for a set it is O(1) operation