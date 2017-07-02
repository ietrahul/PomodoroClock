var myVar, min, sec, totalTime, timeSpent=0;

function trial() {
//myVar = setTimeout(myFunction, 1000);
 min = Number(document.getElementById("time").innerHTML);
 sec = 0;
 totalTime = min*60;
 myVar = setInterval(myFunction, 1000);
}


function myFunction() {
  var x = document.getElementById("time").innerHTML;
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
  if (min == 0 && sec == 0){
    clearInterval(myVar);
  }
  timeSpent +=1;
  var percentage = Math.floor((100*timeSpent/totalTime));
  if (percentage%2 == 0)  fill(percentage);
}

function add(){
  clearInterval(myVar);
  var x = document.getElementById("Sessiontime").innerHTML;
  document.getElementById("Sessiontime").innerHTML = Number(x) + 1;
  //document.getElementById("time").innerHTML = (Number(x) + 1) +" : " + "00";
  document.getElementById("time").innerHTML = Number(x) + 1;
}

function subtract(){
  clearInterval(myVar);
  var x = document.getElementById("Sessiontime").innerHTML;
   if (x != "1"){
  document.getElementById("Sessiontime").innerHTML = Number(x) - 1;
  //document.getElementById("time").innerHTML = (Number(x) - 1) +" : " + "00";
  document.getElementById("time").innerHTML = Number(x) - 1;
  }
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