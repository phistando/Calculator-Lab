$(document).ready(function(){


//-----------------Basic Cal---------------------

var basicCal = $('#basic-calc');
var basicAns = $('#basic-answer-alert');

basicCal.click(function(){

var num1 = Number($('#basic-num-1').val());
var num2 = Number($('#basic-num-2').val());
var oper = $('#basic-operation').val();
var ans;


switch(oper){
  case "+":
  ans = num1 + num2;
  break;
  case "-":
  ans = num1 - num2;
  break;
  case "*":
  ans = num1 * num2;
  break;
  case "/":
  ans = num1 / num2;
  break;
}

basicAns.html(ans);

});





//--------------Trip Cal----------------

var tripCal = $('#trip-calc');
var tripAns = $('#trip-answer-alert');

tripCal.click(function(){

  var miles = $('#trip-distance').val();
  var mpg = $('#trip-mpg').val();
  var cost = $('#trip-cost').val();
  var speed = $('#trip-speed').val();
  var ans;

if (speed < 60){
  ans = miles / (mpg * cost)
  tripAns.html(ans);
}else{
  ans = miles / (mpg-(speed - 60) * 2) * cost;
  tripAns.html(ans);
}

});



//----------bmiCal---------


var bmiCal = $('#bmi-calc');
var bmiAns = $('#bmi-answer-alert');

bmiCal.click(function(){
  var mass = $('#bmi-mass').val();
  var height = $('#bmi-height').val();
  var ans;

  ans = (mass * 2.20462) / ((height * 39.3701) * (height * 39.3701)) * 703;

  bmiAns.html(ans);

});

});
