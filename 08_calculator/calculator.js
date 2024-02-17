const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr === undefined || arr.length == 0) {
    return 0;
  } 
  return arr.reduce((sum, first) => sum += first);
};

const multiply = function(arr) {
  return arr.reduce((sum, first) => sum = sum * first);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  } else {
    let sum = 1;
    for (i = a; i>0; i--){
      sum = sum * i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
