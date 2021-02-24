function numbersplit(num){
    if(num%2 == 0){
        num1=num/2;
        num2=num1;
    }
    else if(num%2 >= 1 || num%2 <= -1){
        num1=(num/2)+0.5;
        num2=num1-1;
    }
    return[num2,num1];
}
console.log(numbersplit(4));
console.log(numbersplit(10));
console.log(numbersplit(11));
console.log(numbersplit(-9));