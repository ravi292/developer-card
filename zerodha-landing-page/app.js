const form = document.querySelector('form');
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear');
const capital = document.querySelector('#capital');
const interest= document.querySelector('#interest');
const years = document.querySelector('#years');
const result = document.querySelector('.result');
const interestTotal = document.querySelector('.interest');


form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const getResponse = (e) => {
    console.log(capital.value);
    const ans = capital.value * Math.pow(1+interest.value/100, years.value);
    result.value = Math.floor(ans);    
}

const getResponseFromHarkirat = async (e) => {
    console.log(capital.value);
    const response = await fetch(`https://sum-server.100xdevs.com/interest?principal=${capital.value}&rate=${interest.value}&time=${years.value}`);
//    const response = await fetch(`https://sum-server.100xdevs.com/interest?principal=10000&rate=19&time=10`);
    const ans = await response.json();
    result.value = Math.floor(ans.total);    
    interestTotal.value = Math.floor(ans.interest)
}

calculate.addEventListener('click', getResponseFromHarkirat)

clear.addEventListener('click', (e) => {
    capital.value = 0; 
    interest.value = 0; 
    years.value = 0;
    result.value = 0;
    interestTotal.value= 0;
})
