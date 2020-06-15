var desc1 = document.getElementById("desc1").style;
var text1 = document.getElementById("text1").style;
var suit1 = document.getElementById("spade").style;
var sq1 = document.getElementById("sq1");

var upstatus1 = 0;
var upstatus2 = 0;
var upstatus3 = 0;
var upstatus4 = 0;

var hoverstatus1 = 0;
var hoverstatus2 = 0;
var hoverstatus3 = 0;
var hoverstatus4 = 0;



$(document).ready(function(){

  $("me").mouseover(function(){
    if (upstatus1+upstatus2+upstatus3+upstatus4 == 0) {
      var squares = document.getElementById('squares');
      squares.style.WebkitTransitionDuration='3s';
      squares.style.webkitTransform = 'rotateY(360deg)';
    }
  });

  $("me").mouseout(function(){
    if (upstatus1+upstatus2+upstatus3+upstatus4 == 0) {
      var squares = document.getElementById('squares');
      squares.style.WebkitTransitionDuration='3s';
      squares.style.webkitTransform = 'rotateY(-360deg)';
    }
  });



// sq1

  $("#sq1").hover(function(){
    if (upstatus1 != 1) {
      if (hoverstatus1 == 0) {
        $("#sq1").animate({top: "-=20px"}, duration=400, easing="swing");
        $("#spade").animate({fontSize: "0px"}, duration=400, easing="swing");
        $("#text1").animate({opacity: 1}, duration=200, easing="swing");
        hoverstatus1 = 1;
      } else {
        $("#sq1").animate({top: "+=20px"}, duration=400, easing="swing");
        $("#text1").animate({opacity: 0}, duration=200, easing="swing");
        $("#spade").animate({fontSize: "40px"}, duration=400, easing="swing");
        hoverstatus1 = 0;
      }
    }
  });

  $("#sq1").click(function(){
    if (upstatus1 != 1) {
      $("#desc1").animate({opacity: 1}, duration=400, easing="swing");
      upstatus1 = 1;
    } else {
      $("#desc1").animate({opacity: 0}, duration=400, easing="swing");
      upstatus1 = 0;
    }
  });


//sq3

  $("#sq3").hover(function(){
    if (upstatus3 != 1) {
      if (hoverstatus3 == 0) {
        $("#sq3").animate({top: "+=20px"}, duration=400, easing="swing");
        $("#club").animate({fontSize: "0px"}, duration=400, easing="swing");
        $("#text3").animate({opacity: 1}, duration=200, easing="swing");
        hoverstatus3 = 1;
      } else {
        $("#sq3").animate({top: "-=20px"}, duration=400, easing="swing");
        $("#text3").animate({opacity: 0}, duration=200, easing="swing");
        $("#club").animate({fontSize: "40px"}, duration=400, easing="swing");
        hoverstatus3 = 0;
      }
    }
  });

  $("#sq3").click(function(){
    if (upstatus3 != 1) {
      $("#desc3").animate({opacity: 1}, duration=400, easing="swing");
      upstatus3 = 1;
    } else {
      $("#desc3").animate({opacity: 0}, duration=400, easing="swing");
      upstatus3 = 0;
    }
  });



//sq2

  $("#sq2").hover(function(){
    if (upstatus2 != 1) {
      if (hoverstatus2 == 0) {
        $("#sq2").animate({left: "+=20px"}, duration=400, easing="swing");
        $("#heart").animate({fontSize: "0px"}, duration=400, easing="swing");
        $("#text2").animate({opacity: 1}, duration=200, easing="swing");
        hoverstatus2 = 1;
      } else {
        $("#sq2").animate({left: "-=20px"}, duration=400, easing="swing");
        $("#text2").animate({opacity: 0}, duration=200, easing="swing");
        $("#heart").animate({fontSize: "40px"}, duration=400, easing="swing");
        hoverstatus2 = 0;
      }
    }
  });

  $("#sq2").click(function(){
    if (upstatus2 != 1) {
      $("#desc2").animate({opacity: 1}, duration=400, easing="swing");
      upstatus2 = 1;
    } else {
      $("#desc2").animate({opacity: 0}, duration=400, easing="swing");
      upstatus2 = 0;
    }
  });



  $("#sq4").hover(function(){
    if (upstatus4 != 1) {
      if (hoverstatus4 == 0) {
        $("#sq4").animate({left: "-=20px"}, duration=400, easing="swing");
        $("#diamond").animate({fontSize: "0px"}, duration=400, easing="swing");
        $("#text4").animate({opacity: 1}, duration=200, easing="swing");
        hoverstatus4 = 1;
      } else {
        $("#sq4").animate({left: "+=20px"}, duration=400, easing="swing");
        $("#text4").animate({opacity: 0}, duration=200, easing="swing");
        $("#diamond").animate({fontSize: "40px"}, duration=400, easing="swing");
        hoverstatus4 = 0;
      }
    }
  });

  $("#sq4").click(function(){
    if (upstatus4 != 1) {
      $("#desc4").animate({opacity: 1}, duration=400, easing="swing");
      upstatus4 = 1;
    } else {
      $("#desc4").animate({opacity: 0}, duration=400, easing="swing");
      upstatus4 = 0;
    }
  });



});



/*
sq1.onclick = function click1() {
  if (desc1.opacity == 0) {
    desc1.opacity = 1;
    sq1.style.transform = "translateX(-50%) rotate(45deg) translateX(-15px) translateY(-15px)";
  } else {
    desc1.opacity = 0;
    sq1.style.transform = "translateX(-50%) rotate(45deg)";
  }
}

sq1.onmouseover = function hover1() {
  if (status == 0) {
    text1.opacity = 1;
    suit1.fontSize = 0;
    sq1.style.transform = "translateX(-50%) rotate(45deg) translateX(-15px) translateY(-15px)";
    status = 1;
  }
}

sq1.onmouseout = function unhover1() {
  if (status == 1) {
    text1.opacity = 0;
    suit1.fontSize = "40px";
    sq1.style.transform = "translateX(-50%) rotate(45deg)";
    status = 0;
  }
}
*/
