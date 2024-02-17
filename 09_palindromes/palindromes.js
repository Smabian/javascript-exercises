const palindromes = function (text) {
    text = text.toLowerCase();
    text = text.replaceAll(" ", "");
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    let reverseText = "";

    for(i=text.length; i >= 0; i--){
        let letter = text.charAt(i);
        reverseText = reverseText.concat(letter);
    }

    if (reverseText === text) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
