const repeatString = function(text, repeat) {
    let outputText = "";

    if(repeat < 0){
       outputText = "ERROR";
    }

    for(i=repeat;i>0;i--) {
        outputText += text;
    }
    return outputText;
};

// Do not edit below this line
module.exports = repeatString;
