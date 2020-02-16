let i = 0;
let j = 0;
const textArray = ["HTML", "CSS", "Javascript"],
    speed = 100,
    target = document.getElementById("type");


//한글자씩 추출해서 html에 출력 charAt
function type(){
    if(textArray[i].length>j){
        target.innerHTML += textArray[i].charAt(j);
        setTimeout(type,speed);
        j++;
    }
    else{
        remove();
    }
}
type();


//한글자씩 html에서 제거 slice
function remove(){
    if(j>0){
        target.innerHTML = textArray[i].slice(0,j-1);
        setTimeout(remove,speed);
        j--;
    }
    else{
        textNum();
        type();
    }
}

//다음 문자열로 넘어감
function textNum(){
    if(i==textArray.length-1){
        i=0;
    }
    else{
        i++;
    }
}
