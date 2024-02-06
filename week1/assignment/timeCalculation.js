let time = 0;
const id1 = setInterval(() => {
    time++;
}, 1000);
console.log(time);
setTimeout(()=>{
    console.log("hello world"); 
    console.log(time);
}, 2000);
console.log(time);
