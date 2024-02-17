const getTheTitles = function(books) {
    const array = [];

    for (title in books) {
        array[title] = books[title].title;
    }

    return array;
}

// Do not edit below this line
module.exports = getTheTitles;
