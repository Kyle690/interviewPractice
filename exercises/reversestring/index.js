// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
    let reversed = '';
    // new for loop syntax with es2015
    for (let character of str){
        reversed = character+reversed;

    }
    return reversed;
}

module.exports = reverse;

//-------------------------- Solutions ----------------------------
/*
 The most basic First solution  !!!
        step 1 - turn string into an array
        step 2 - reverse the array
        step 3 - join the array back to a string
        step 4 - return result!

function reverse(str){
    return str.split('').reverse().join('');
}
*/

/*
Second Solution

        step 1 - create a string
        step 2 - create a for loop and loop through all the characters in the string
        step 3 - return the string

function reverse(str){
    let reversed = '';
        // new for loop syntax with es2015
        for (let character of str){
            reversed = character+reversed
        }
        return reversed;
}
 */

/*
    Third Solution
    step 1 - turn the string into an array with split();
    step 2 - use reduce to reverse the characters of the string
    step 3 - return the string


    /*********** debugger statement ***********************
function reverse(str) {

    debugger;
    return str.split('').reduce((rev,char)=>char+rev,'');

}
*/
