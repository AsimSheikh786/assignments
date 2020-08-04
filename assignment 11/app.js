var questions = [
    {
        id: 1,
        question: "What is the full form of HTML ?",
        answer: "Hyper Text Mark-up Language",
        options: [
            "Hyper Test Mark-up Language",
            "Hyper Text Mark-up Language",
            "Hyper Text Multiple Language",
            "Hyper Test Machine Language"
        ]
    },
    {
        id: 2,
        question: "How many miliseconds in 1 second ?",
        answer: "1000 ms",
        options: [
            "1000 ms",
            "100 ms",
            "1024 ms",
            "10 ms"
        ]
    },
    {
        id: 3,
        question: "What is 2 power 8 ?",
        answer: "256",
        options: [
            "16",
            "64",
            "256",
            "200"
        ]
    },
    {
        id: 4,
        question: "Which of the following device can store large amount of data ?",
        answer: "Hard Drive",
        options: [
            "Floppy Disk",
            "RAM",
            "EPROM",
            "Hard Drive"
        ]
    },
    {
        id: 5,
        question: "Which one is not the type of ROM ?",
        answer: "EROM",
        options: [
            "PROM",
            "EROM",
            "EPROM",
            "EEPROM"
        ]
    },
    {
        id: 6,
        question: "Which one is not a peripheral device ?",
        answer: "Hard Drive",
        options: [
            "Keyboard",
            "Mouse",
            "Webcam",
            "Hard Drive"
        ]
    },
    {
        id: 7,
        question: "What is the square root of 121 ?",
        answer: "11",
        options: [
            "11",
            "14,641",
            "12",
            "60"
        ]
    },
    {
        id: 8,
        question: "Solve this (2+4/2*8) ?",
        answer: "18",
        options: [
            "24",
            "0.375",
            "18",
            "2.25"
        ]
    },
    {
        id: 9,
        question: "Solve this (2*3/2-4) ?",
        answer: "-1",
        options: [
            "-3",
            "1",
            "-0.5",
            "-1"
        ]
    },
    {
        id: 10,
        question: "Which device is known as input device ?",
        answer: "All of above",
        options: [
            "Keyboard",
            "Mic",
            "Scanner",
            "All of above"
        ]
    }
]


var name = document.getElementById('name');
var start = document.getElementById('start');
var main = document.getElementById('main');
function names() {
    var name = document.getElementById('name');
    var nameText = document.getElementById('nameText');
    name.innerHTML = nameText.value;

    start.className = "showOff";
    main.className = "main";


    var interval = setInterval(timer, 1000);
    // console.log(name.innerHTML);
    // console.log(nameText.value);
}










var secHeading = document.getElementById('sec');
var minHeading = document.getElementById('min');
var sec = 60;
var min = 14

function timer() {
    sec--;
    secHeading.innerHTML = sec;
    if (sec < 1) {
        min--;
        minHeading.innerHTML = min;
        sec = 60;
    }
}

var score = 0;

var ques = document.getElementById('ques');
ques.innerHTML = questions[0].question;

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
option1.innerHTML = questions[0].options[0];
option2.innerHTML = questions[0].options[1];
option3.innerHTML = questions[0].options[2];
option4.innerHTML = questions[0].options[3];

var increaseQuestions = document.getElementById('increaseQuestions');

var increaseQuestion = document.getElementById('increaseQuestion');

var quesNum = 1;
// console.log(ques.value);
var nextBtn = document.getElementById('nextBtn')
var submitBtn = document.getElementById('submitBtn');

function next() {
    scores(quesNum)
    removeSelect();
    // console.log(ques.innerHTML);
    ques.innerHTML = questions[quesNum].question;

    option1.innerHTML = questions[quesNum].options[0];
    option2.innerHTML = questions[quesNum].options[1];
    option3.innerHTML = questions[quesNum].options[2];
    option4.innerHTML = questions[quesNum].options[3];

    increaseQuestions.innerHTML = quesNum + 1;
    increaseQuestion.innerHTML = quesNum + 1;

    quesNum++;
    console.log(score)

    if (quesNum == "10") {

        nextBtn.className = "showOff"
        submitBtn.className = "blockBtn"
    }
}

function select(e) {
    removeSelect();
    e.className = "active";
    // var ans = e.innerHTML;
}

function removeSelect() {
    var remove1 = document.getElementById('option1');
    var remove2 = document.getElementById('option2');
    var remove3 = document.getElementById('option3');
    var remove4 = document.getElementById('option4');

    remove1.className = "a";
    remove2.className = "a";
    remove3.className = "a";
    remove4.className = "a";
}

function scores(e) {
    var s = document.getElementsByClassName('active');
    // console.log(s[0].innerHTML)
    // console.log(questions[e-1].answer)
    if (s[0].innerHTML == questions[e - 1].answer) {
        score++;
    }
}


var showScore = document.getElementById('showScore');
var scoreValue = document.getElementById('scoreValue')
function submit(){
    scores(quesNum)
    showScore.className = "showScore"
    main.className = "showOff";
    // console.log(scoreValue.innerHTML)
    // console.log(score);

    scoreValue.innerHTML = score;
}




// e.parentNode.parentNode.firstChild.nodeValue