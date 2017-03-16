//---------------------------------------------
console.log('#1. PALINDROME');
function palindrome (str) {
    // change entire string to lowercase
    let lcase = str.toLowerCase();
    // get rid of all spaces
    let noSpaces = lcase.split(' ').join('');
    // check if the string is a palindrome
    let noSpacesReverse = noSpaces.split('');
    return noSpaces === noSpacesReverse.reverse().join('');
}

console.log(palindrome("bat tab"));
console.log(palindrome("bar tab"));
console.log(palindrome("A Santa at Nasa"));