var myVar, min, sec, totalTime, timeSpent=0, i=0;

function trial() {
//myVar = setTimeout(myFunction, 1000);
if (i== 0){
 min = Number(document.getElementById("Sessiontime").innerHTML);
 sec = 0;
 totalTime = min*60;
 myVar = setInterval(myFunction, 1000);
}
 //call break time
 if (i==1){
 min = Number(document.getElementById("BreakTime").innerHTML);
 sec = 0;
 totalTime = min*60;
 timeSpent=0;
 document.getElementById("time").innerHTML = min;
 myVar = setInterval(myFunction, 1000);
 }
}


function myFunction() {
  //var x = document.getElementById("time").innerHTML;
  if (min > 0 ) {
    if (sec == 0){
      min -= 1;
      sec = 59;
    } else {
      sec -= 1;
    }
  } else if (min == 0 && sec > 0) {
    sec -= 1;
  }
    document.getElementById("time").innerHTML = (min > 9 ? min : "0"+min) +" : "+ (sec > 9 ? sec : "0"+sec) ;
  timeSpent +=1;
  var percentage = Math.floor((100*timeSpent/totalTime));
  if (percentage%2 == 0)  fill(percentage);
    if (min == 0 && sec == 0){
    clearInterval(myVar);
    i +=1;
    if (i==1) trial();
 console.log(i);
  }
}

function add(str){
  clearInterval(myVar);
  var x = document.getElementById(str).innerHTML;
  document.getElementById(str).innerHTML = Number(x) + 1;
  if (str === "Sessiontime") document.getElementById("time").innerHTML = Number(x) + 1;
  i = 0;
  fil(0);
}

function subtract(str){
  clearInterval(myVar);
  var x = document.getElementById(str).innerHTML;
   if (x != "1"){
  document.getElementById(str).innerHTML = Number(x) - 1;
   if (str === "Sessiontime") document.getElementById("time").innerHTML = Number(x) - 1;
  }
  i = 0;
  fil(0);
}

function fill(percentage){
  //var percentage=70,
    col1="#F00",
    col2="#00F";
var t=document.getElementById('circle');
t.style.background = "-webkit-gradient(linear, left top,right top, color-stop("+percentage+"%,"+col1+"), color-stop("+percentage+"%,"+col2+"))";
t.style.background = "-moz-linear-gradient(left center,"+col1+" "+percentage+"%, "+col2+" "+percentage+"%)";
t.style.background = "-o-linear-gradient(left,"+col1+" "+percentage+"%, "+col2+" "+percentage+"%)";
t.style.background = "linear-gradient(to right,"+col1+" "+percentage+"%, "+col2+" "+percentage+"%)";
}