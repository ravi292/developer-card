const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("request reached");
    //this will make the thread busy and the other requests will also have to wait....
//    let a = 0;
//    for(let i = 0; i<1000000000000000; i++){
//        a += i;
//    }
    res.send("hello world");
})

app.get('/hello', (req, res) => {
    res.send("HEY!!! HI!!!!");
})

app.post('/', (req, res) => {
    res.send("hello world");
})
app.listen(port, ()=> {
    console.log("Listening to port")
})

