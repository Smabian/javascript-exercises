const findTheOldest = function(people) {
    let currentAge = 0;
    let oldestAge = 0;
    let oldestPerson;
    let today = new Date();

    for (name in people) {
        if(people[name].hasOwnProperty("yearOfDeath")) {
            currentAge = people[name].yearOfDeath - people[name].yearOfBirth;
        } else {
            currentAge = today.getFullYear() - people[name].yearOfBirth;
        }
        if (currentAge > oldestAge) {
            oldestAge = currentAge;
            oldestPerson = people[name];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
