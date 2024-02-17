const fibonacci = function(value) {

    if (value < 0) {
        return "OOPS";
    } 

    let fibonacci = [0,1];

    for (i=0; fibonacci.length <= value; i++) {
        fibonacci[i+2] = fibonacci [i] + fibonacci [i+1];
    }

    return fibonacci[value];
};

// Do not edit below this line
module.exports = fibonacci;
