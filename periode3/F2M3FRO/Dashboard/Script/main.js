const startbutton = document.getElementById("js--start");
const stopbutton = document.getElementById("js--stop");
const resetbutton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false;

const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");


let timer;

startbutton.onclick = function(){
    if(running === true){
        return;
    }
    running = true
    timer = setInterval(function(){
        seconds = seconds + 1;
        if(seconds == 60){
            minutes = minutes + 1;
            minutesTimer.innerText = minutes;
            seconds = 0;
        } 
        secondsTimer.innerText = seconds;
    }, 1000); /* dit is in ms 1000 ms is 1 sec*/
}
stopbutton.onclick = function(){
    clearTimeout(timer);
    running = false
}

resetbutton.onclick = function () {
    seconds = 0;
    minutes = 0;
    clearInterval(timer);
    running = false
    secondsTimer.innerText = 0;
    minutesTimer.innerText = 0;
}

/* hier begint de slider */
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body")
slider.value = 1;
rangeValue.innerText = slider.value + "x";


slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

/* hier begint text viaJavaScript */
//data ophalen

let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
        console.log(echteData.text);
        }
    );

const text = document.getElementById("js--text");
text.innerText = data.text;