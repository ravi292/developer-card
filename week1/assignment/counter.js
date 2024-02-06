let seconds = 30;
const counter = function(intervalId){
    console.log(seconds);
    seconds--;
    if(seconds === -1){
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(() => {
    counter(intervalId);
    return;
}, 1000);
