
function fancyArr(arr, symbol, rev){
    for (var i = 0; i < arr.length; i++){
        if (rev != true){
            console.log(i + ' ' + symbol + ' ' + arr[i]);
        }
    }    
    for (var i = arr.length-1; i >= 0; i--){
        console.log(i + ' ' + symbol + ' ' + arr[i]);
    }
}
fancyArr(['James','Jill','Jane','Jack'],'->',true);
