console.log("hello world");

function sum(n){
    let a = 0;
    for(let i = 0; i<n; i++){
        a += i;
    }
    return a;
}

function sumOf1000(){
    console.log(sum(1000));
}
setTimeout(sumOf1000, 1000);
console.log(sum(100)); 
