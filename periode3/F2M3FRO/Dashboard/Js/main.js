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
    clearInterval(timer);
    running = false
}
resetbutton.onclick = function(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
}
