// --- Directions
// A palindrome is a word or a phrase that reads the same forward as backwards
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



/*
    First Solution
    step 1 - create a reversed string of the string
    step 2 - return a comparison test of the reversed string vs the original string

    function palindrome(str) {

    const reversedString = str.split('').reverse().join('');
    return reversedString ===str

}
 */

/*
    Second Solution

    step 1 - create an array of the string
    step 2 - use the every() function to loop through all the elements in the array
             and compare them to the opposite element at the end of the array;
    step 3 - comparison;

 */

function palindrome(str){
    return str.split('').every((char,i)=>{
        return char===str[str.length-i-1];
    })
}


module.exports = palindrome;
