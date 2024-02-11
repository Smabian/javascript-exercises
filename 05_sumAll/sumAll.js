const sumAll = function(number1, number2) {

    let sumAll = 0;
    let smallNumber;
    let largeNumber;

    if(number1 <= 0 || number2 <= 0 || "number" !== typeof number1 || "number" !== typeof number2 ) {
        return sumAll = "ERROR";
    }

    if(number1 < number2) {
        smallNumber = number1;
        largeNumber = number2;
    } else {
        smallNumber = number2;
        largeNumber = number1;
    }

    for(i=smallNumber; i <= largeNumber; i++) {
        sumAll += i;
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
