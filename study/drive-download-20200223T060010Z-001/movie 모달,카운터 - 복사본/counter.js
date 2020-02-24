var btnplus = document.getElementById('bt1');
var btnminus = document.getElementById('bt2');
var money = document.getElementById('money');
var number = 0;
var a = 0;
var b = 0;

function plus(){
    btnplus.addEventListener("click",function(){
         number = document.getElementById('number').innerText;
         if(a==10){}
         else{
         a = parseInt(number)+1;
         b = (parseInt(number)+1)*9000;
         document.getElementById('number').innerText = a;
         document.getElementById('money').innerText = b;}
    })
}
plus();

function minus(){
    btnminus.addEventListener("click",function(){
         number = document.getElementById('number').innerText;
         if(a==0){}
         else{
         a = parseInt(number)-1;
         b = (parseInt(number)-1)*9000;
         document.getElementById('number').innerText = a;
         document.getElementById('money').innerText = b;}
    })
}
minus();