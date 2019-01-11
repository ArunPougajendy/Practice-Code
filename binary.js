/*Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11*/

var a=[0,0,0,1];
var b=[1,0,1,1];

function binary(a) {
    var ans =0;
    var convert=[8,4,2,1];
    length = a.length;
    for ( var i=0 ; i <length ; i++) {
        ans+= (a[i] * convert[i]);
    }
    return ans;
}

console.log(binary(b));