const reverseString = function(initialString) {
    let reverseString = "";
    let stringLength = initialString.length;
    
    for(i=stringLength; i>=0; i--) {
        reverseString += initialString.charAt(i);
    }

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
