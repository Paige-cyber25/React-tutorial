function getFullNameInitials(names) {
    let fullNames = names;
    // split() creates an array of strings when used on a string or object
    let newNames = fullNames.split(' '); 
    // shift() removes from the beginning of an array while slice removes from a string(what index, how many element should be removed)
    let firstNameInitial =  newNames.shift().slice(0,1); 
    //pop() removes from the end of an array
    let secondNameInitial = newNames.pop().slice(0,1);
    let result = firstNameInitial + " " + secondNameInitial; 
    return result;
}

function getRandomNumBetweenMinAndMax(min, max) {
    // Math.ceil() rounds up a decimal number and returns an integer
    min = Math.ceil(min);
    // Math.floor() rounds down a decimal number and returns an integer
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}


export {getFullNameInitials, getRandomNumBetweenMinAndMax};