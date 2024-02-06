//This week was all basics so did not attended too seriously to save time to prepare for my exams :)

//let sum = 0;
//for (let i = 0;i <= 1000000000000; i++) {
//sum = sum + i;
//}
//console. log(sum);
//
    
//function sum(num1, num2, fun) {
//    let result = num1 + num2;
//    fun(result);
//}
//
//function displayResult(data) {
//    console.log("Result of the sum is : " + data);
//}
//
//function displayResultPassive(data) {
//    console.log("Sum's result is : " + data);
//}
//
//// You are only allowed to call one function after this
//// How will you displayResult of a sum
//
////sum(1, 2, displayResult);
//sum(1, 2, displayResultPassive);
//

const greet = function() {
    console.log('Hello world')
}

setTimeout(greet, 3*1000);
setInterval(greet, 1000);
