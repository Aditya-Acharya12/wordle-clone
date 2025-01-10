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
    await fetch(wordBank).then((response) => response.text()).then((result)=> {
        const wordArr = result.split("\n");
        wordSet = new Set(wordArr);
    })
    return { wordSet };
};
//we use set instead of an arry as for an array we have to traverse through the entire array to check if element 
//is present or not O(n), but for a set it is O(1) operation