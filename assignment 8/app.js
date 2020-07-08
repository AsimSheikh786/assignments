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

var dayMode = document.getElementById("day");
var nightMode = document.getElementById("night")
var body = document.getElementById("body");
var main = document.getElementById("main");

function changeMode(){
    dayMode.className = "offMode";
    nightMode.className = "onMode"
    body.className = "body2";
    main.className = "main2";
}

function changeMode2(){
    dayMode.className = "onMode";
    nightMode.className = "offMode"
    body.className = "body"
    main.className = "main";
}
