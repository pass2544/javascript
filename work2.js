function highestDigit(num){
    //let num1=0;
    
    let numarray = num.toString().split("");
    let max=0;
    for(var n=0;n < numarray.length;n++){
        if(max<numarray[n]){
            max = numarray[n];
        }
    }
    return(max);
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));