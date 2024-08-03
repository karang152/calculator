function calculate(){
    //get input values
    let num1 =parseFloat(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let num2 =parseFloat(document.getElementById("num2").value);
     
    //perform calculation
    let result;
    switch(operator){
        case"+":
            result = num1 + num2;
            break;
        case"-":
            result = num1 - num2;
            break;
        case "*":
            result=num1 * num2;
            break;
        case "/":
            result=num1 / num2;
            break;
        case "^":
            result=num1 ** num2;
            break;  
        case "%":
            result=num1 % num2;
            break;
        case "sqrt":
            result=Math.sqrt(num1);
            break;
        default:
            result = "Invalid operator"
    }
    //display result
    document.getElementById("result").innerHTML="result: "+result;
}