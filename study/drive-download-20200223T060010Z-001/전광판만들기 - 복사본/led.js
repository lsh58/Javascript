
var led = document.getElementById('led');


function textChange(){
    var text = document.getElementById('inputText').value;
    led.innerHTML = text;
}
function colorChange(){
    var color = document.getElementById('inputColor').value;
    led.style.color = color;
}