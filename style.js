function GetNumber(num){
     var display = document.getElementById("display");

    display.value += num;
}

function cleardata(){
    var display= document.getElementById("display");
    display.value = " ";
}
function getResult(){
    var display = document.getElementById("display");
    display.value = eval(display.value);
}
function square(){
    var display = document.getElementById("display");
    display.value = Math.sqrt(display.value);
}