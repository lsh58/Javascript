
var open = document.getElementById('open');


function openModal(){
    open.addEventListener("click",function(e){
        document.querySelector('.modal-wrapper').style.display="flex";
    })
}

openModal();

var close = document.getElementById('close');

function closeModal(){
    close.addEventListener("click",function(e){
        document.querySelector('.modal-wrapper').style.display="none";
    })
}

closeModal();w