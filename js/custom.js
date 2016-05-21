$(function(){
	//jQuery methods go here
var currentTemperature;
var currentC;
var currentF;

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=3d2363042523c46eb86f30163a636f2c", function(result){
  currentTemperature = result.main.temp;
  displayTemp();
});

function displayTemp(){
  $("#output").append("Temp K = "+currentTemperature+"K<br>");
  $("#outputC").append("Temp C = "+( (currentTemperature - 273.15).toFixed(2) )+"C<br>");
  	currentC = (currentTemperature - 273.15).toFixed(2);
  $("#outputF").append("Temp F = "+( (currentTemperature * (9/5) - 459.67).toFixed(2) )+"F<br>");
  	currentF = (currentTemperature * (9/5) - 459.67).toFixed(2)
  // console.log ("hello World")
  changeBackground();
}

function changeBackground() {
	// console.log (currentTemperature)
	if (currentC > 23) {
		$("body").css("background", "url(images/sunny.jpg) no-repeat center center fixed");
	}
}

});