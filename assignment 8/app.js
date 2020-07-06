var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var minHeading = document.getElementById("min");
var startButton = document.getElementById("show");
var startDisable = document.getElementById("disable")
var msec = 0;
var sec = 0;
var min = 0;
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 99){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }else if(sec >= 59){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10);
    startButton.className = "start2";
    startDisable.className = "start";
}

function pause(){
    clearInterval(interval)
    startButton.className = "start";
    startDisable.className = "start2";
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    pause();
}
