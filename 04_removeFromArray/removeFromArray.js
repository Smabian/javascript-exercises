const removeFromArray = function(initialArray, ...removeItem) {
    
    for (i=0; i <= removeItem.length; i++) {
        let index = initialArray.indexOf(removeItem[i]);
        if (index > -1) {
            initialArray.splice(index,1);
            i--;
        }
    }

    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
