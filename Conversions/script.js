function convertion(){
    let inputText = document.getElementById("originalNumber");
    let selectFunction = document.getElementById("selection");
    let convert;

    let number = parseFloat(inputText.value);

    if(selectFunction.value == "1"){
        convert = (number * 9/5) + 32;
        document.getElementById("result").textContent = convert.toFixed(2);
    } else if(selectFunction.value == "2"){
        convert = (number - 32) * 5/9;
        document.getElementById("result").textContent = convert.toFixed(2);
    } else if(selectFunction.value == "3"){
        convert = number * 0.3;
        document.getElementById("result").textContent = convert.toFixed(2);
    } else if(selectFunction.value == "4"){
        convert = number / 0.3048;
        document.getElementById("result").textContent = convert.toFixed(2);
    }
}