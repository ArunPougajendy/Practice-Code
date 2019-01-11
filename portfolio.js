var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

function portFolio(a,b) {
    var total =0;arr=[];count =0;obj ={};
    for (var i =0; i<b.length ; i++)
    {
        var temp= a.indexOf(b[i][0]);
        if(temp >= 0) {
            count++;
            var stock = a[temp+1];
            var product = b[i][1] * stock;
            total+=product;
            arr.push([b[i][0],product]);
        }
        else {
            arr.push(b[i][0],'comapany doesnot exist');
        }
    }
    if(count>0) {
        arr.push(['total',total]);
    }
    else
    arr=[0];
    for( var i =0 ;i <arr.length ; i++) {
        obj [arr[i][0]] = arr[i][1];
    }
    return obj;
}

console.log(portFolio(ticker,portfolio));