function factorial(){
    let input = document.getElementById("numberInput");

    let number = parseInt(input.value);
    let i=1, result=1;

    if (number === 0){
        return 0;
    }
    while(i <= number){
        result *= i;
        i++;
    }

    document.getElementById("result").innerHTML= result;
}


function sumandaverage(){
    let input = document.getElementById("inputnumber");

    let number = parseFloat(input.value)
    let i=0, result=0;

    //sum
    do{
        result += i;
        i++;
    }while(i <= number);


    document.getElementById("sumresult").innerHTML= result;
    //average

    for(i; i <= number; i++){
        result += i;
    }

    document.getElementById("average").innerHTML= result/number;
}