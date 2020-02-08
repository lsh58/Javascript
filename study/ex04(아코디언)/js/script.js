
// 변수 지정

// 클릭(heading)하면 다른곳(question)에 있는 active는 모두 사라지고, 클릭한곳(heading)의 부모(question)에 active 추가하기

// active가 없는 모든 내용(body) 는 display=none을 갖고, active가 있는 곳의 내용만 display=block를 갖도록 


var btnCollapse = document.getElementById('btn-collapse');
var heading = document.getElementsByClassName('panel-heading');
var question = document.getElementsByClassName('panel-question');
var answer = document.getElementsByClassName('panel-body');


for(var i = 0; i < heading.length ; i++){
    heading[i].addEventListener('click', function(ev){
        for(var j = 0; j < question.length ; j++){
            question[j].classList.remove('active');
            ev.target.parentNode.classList.add('active');
            activateBody();
        }
    });
}

function activateBody(){
    for(var x =0; x < answer.length ; x++){
        answer[x].style.display='none';
    }   
    var activePanel=document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display='block';
}

activateBody();