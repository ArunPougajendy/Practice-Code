/*Have the function palindrome(str) accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.

NOTE - without using .reverse() method

Examples:

INPUT: palindrome("racecar");
OUTPUT: true
INPUT: palindrome("animal");
OUTPUT: false*/

var a ='madam';
var b ='race';

function pal(a) {
    var reverseStr = a.split('').reverse().join('');
    return reverseStr;
}

console.log(pal(a));