/*Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

Examples:

INPUT: countUpThenDown(2)
OUTPUT: [0, 1, 2, 1, 0]
INPUT: countUpThenDown(0)
OUTPUT: [0]*/

function countUpThenDown(a){
	var output =[];
	for(i=0; i <= a; i++) {
		output.push(i);
    }
    
    console.log(i);
	for( j = i-2 ; j>=0 ; j--)
	{
		output.push(j);
	}
    return output;
}

console.log(countUpThenDown(2));