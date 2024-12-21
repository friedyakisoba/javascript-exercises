const sumAll = function (...intSum) {
    let finalValue = 0;

    for (let i = 0; i < intSum.length; i++) {
        if (intSum[i] < 0 ||
            typeof intSum[i] !== 'number' ||
            intSum[i] % 1 !== 0) return "ERROR";


    }

    for (let i = Math.min(null, ...intSum); i <= Math.max(null, ...intSum); i++) {

        finalValue += i;

    }
    return finalValue;
};


// throw an error


// Do not edit below this line
module.exports = sumAll;
