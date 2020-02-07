
// 변수 지정
var slideWrapper = document.getElementsByClassName('container');   //클래스명 container
var slideContainer = document.getElementsByClassName('slider-container');  //클래스명 slider-container
var slides = document.getElementsByClassName('slide');  //클래스명 slide
var slideCount = slides.length;  // 슬라이드 개수
var currentIndex = 0; //첫번째랑 마지막 체크용
var topHeight = 0; //높이
var navPrev = document.getElementById('prev'); // 아이디 prev
var navNext = document.getElementById('next'); // 아이디 next

//슬라이드의 높이 확인하여 부모의 높이로 지정하기

// topHeight = slides[0].offsetHeight;
 
function calculateTallestSlide(){

    for( var i = 0; i < slideCount ; i++ ){
        if(slides[i].offsetHeight > topHeight ){
        topHeight = slides[i].offsetHeight;
        }
    }

    slideWrapper[0].style.height = topHeight + 'px';
    slideContainer[0].style.height = topHeight + 'px';
}

calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기

for( var i = 0; i < slideCount; i++){
    slides[i].style.left= i*100 + '%';
}


// 슬라이드 이동 함수 
function goToSlide(idx){
    slideContainer[0].style.left= idx*(-100) + '%';
    slideContainer[0].classList.add('animated');
    currentIndex = idx;

    //updateNav();
}

// 버튼기능 업데이트 함수

function updateNav(){
if(currentIndex == 0){
    navPrev.classList.add('disabled');
 }else{ navPrev.classList.remove('disabled');}

if(currentIndex == slideCount -1){
        navNext.classList.add('disabled');}
        else{navNext.classList.remove('disabled');
 }
}

// 버튼을 클릭하면 슬라이드 이동시키기

navPrev.addEventListener('click',function(e){
    e.preventDefault();
    // goToSlide(currentIndex-1);
    if(currentIndex == 0){goToSlide(slideCount-1)}
    else{goToSlide(currentIndex-1);} // 마지막으로 가기
});
navNext.addEventListener('click',function(e){
    e.preventDefault();
    // goToSlide(currentIndex+1);
    if(currentIndex == slideCount-1){goToSlide(0)}
    else{goToSlide(currentIndex+1);} // 처음으로 가기
});


// 첫번째 슬라이드 먼저 보이도록 하기

goToSlide(0);
