/*Given an array of even size, task is to find minimum value that can be added to an element so that array become balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.

Input:
The first line of input contains an integer T denoting the number of test cases. Each test case contains the number of elements in the array a[] as n and next line contains space separated n elements in the array a[].

Output:
Print an integer which is the required answer.*/

var a = [1,2,1,2,1,3];

function balancedArray(a) {
    var sum1=0, sum2=0;
    var half = a.length/2;
    for (var i = 0; i < half ; i++ ) {
        sum1+=a[i];
    }
    for (var j =half; j < a.length;j++) {
        sum2+=a[j];
    }

    //console.log(`${sum1} and ${sum2}`);
    if ( sum1 < sum2) {
        diff = sum2 -sum1;
        a.unshift(diff);
    }
    if( sum1 > sum2) {
        diff = sum1 - sum2;
        a.push(diff);
    }
    console.log(a);
    return diff;
}

console.log(balancedArray(a));