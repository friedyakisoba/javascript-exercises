const reverseString = function(word) {
let inputString = "";

for (let int = word.length - 1; int >= 0; int--) {
    inputString += word[int];
}
return inputString;
};

// Do not edit below this line
module.exports = reverseString;
