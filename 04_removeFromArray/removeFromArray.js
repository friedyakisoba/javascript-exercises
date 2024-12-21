const removeFromArray = function(inputArray, ...targetValue) {
    let storeArray = [];
    
    inputArray.forEach((item) => {
        if(!targetValue.includes(item)) {
            storeArray.push(item);
        }
    });
    
   return storeArray;
};


// original solution
// const removeFromArray = function(inputArray, ...targetValue) {
//     let storeArray = [];

//     if (!Array.isArray(inputArray) || inputArray === undefined ) return "ERROR";

//     for (let i = 0; i < inputArray.length; i++) {
//         if (!targetValue.includes(inputArray[i])) {
         
//             storeArray.push(inputArray[i]);
//         }
//     }
//     return storeArray;
// };



// Do not edit below this line
module.exports = removeFromArray;
