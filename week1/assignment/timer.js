let seconds = 0;
let minutes = 0;
let hours = 0;

const timer = function(){
    seconds++;
    if(seconds === 60){
        minutes++;
        seconds = 0;
    }
    if(minutes === 60){
        hours++;
        minutes = 0;
    }
    console.log(hours + " : " + minutes + " : " + seconds);
}

setInterval(() => {
    console.clear();
    timer();
}, 1000);
