var list = [599,100,200]

function mergeSort (arr) {
    if(arr.length < 2) {
        return arr
    } else {
        var mid = parseInt(arr.length/2)
        var leftArr = arr.slice(0,mid);
        var rightArr = arr.slice(mid,arr.length);
        return merge(mergeSort(leftArr),mergeSort(rightArr))
    }
}

function merge(leftArr, rightArr) {
    var sortedArr =[];
    while (leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0])
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0])
            rightArr = rightArr.slice(1)
        }
    }
    while(leftArr.length) {
        sortedArr.push(leftArr.shift())
    }
    while(rightArr.length) {
        sortedArr.push(rightArr.shift())
    }
    return sortedArr;
}

console.log(mergeSort(list))


function swap (arr, i,j ) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function bubbleSort(arr) {
    for (var i = 0 ; i < arr.length ;i++ ) {
        for(var j = 1 ; j < arr.length ; j++) {
            if(arr[j-1] > arr[j]) {
                swap(arr,j-1,j);
            }
        }
    }
    return arr
}

console.log(bubbleSort(list))