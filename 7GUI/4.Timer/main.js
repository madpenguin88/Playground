//implement the timer
var timer = document.getElementById("timer");

//implement the progress-bar
var progressBar = document.getElementById("progress");

progressInterval = setInterval(function() {
    let progressTimer = timer.innerHTML.slice(0,-1) 
    progressBar.value = progressTimer;
    progressBar.max = slidebar.valueAsNumber;
}, 100);
//implement the slidebar

var slidebar = document.getElementById("slidebar");
slidebar.oninput = function() {
 setTimer.innerHTML = this.value + ".0s";
  }

//make the timer start when page loads and work with the slidebar 
let myInterval;
var sec = 0;
function addSeconds() {
    timer.innerHTML =  (sec/10).toFixed(1) + "s";  
sec++}

    function startTimer() {
        clearInterval(myInterval);
        myInterval = setInterval(addSeconds, 100);
        setInterval(function() {
  if(timer.innerHTML.slice(0,2) >= slidebar.valueAsNumber) {
    clearInterval(myInterval);
    }
}, 100);
}
startTimer();


slidebar.addEventListener("input", startTimer)
    

//implement the reset button
var reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    sec = 0;
    timer.innerHTML = sec;
    startTimer();
})