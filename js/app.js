//---------------------------------------------
console.log('#1. PALINDROME');
function palindrome (str) {
    // convert to lowercase
    let lcase = str.toLowerCase();
  
    // if spaces matter, all you need is this line
    // return lcase === lcase.split('').reverse().join('');
  
    // remove all spaces
    let noSpaces = lcase.split(' ').join('');
    console.log(noSpaces);
 
    // compare string to reverse
    return noSpaces === noSpaces.reverse();
}

console.log(palindrome("bat tab"));
console.log(palindrome("bar tab"));
console.log(palindrome("A Santa at Nasa"));