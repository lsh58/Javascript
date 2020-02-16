var docElem = document.documentElement;
var oH = docElem.offsetHeight;
var sH = docElem.scrollHeight;
var btn = document.getElementById("back-to-top");

var docHeight = Math.max(oH,sH); //offsetHeight와 ScrollHeight중 큰값
//Math.max(a,b)s

var offset = docHeight*1/4;


//scrollPos가 offset보다 크면 .visible 추가


window.addEventListener('scroll',function()
    {
        var scrollPos = docElem.scrollTop;
        btn.className=scrollPos>offset?'visible':'s';
      }
    );


btn.addEventListener('click',function(e){
  e.preventDefault();
  var scrollInterval = setInterval(function(){
    var scrollPos = docElem.scrollTop;
    if(scrollPos == 0){
        clearInterval(scrollInterval);
    }
    else{window.scrollBy(0,-50);
    }},15);
});
