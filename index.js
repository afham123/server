const express = require('express');   // imported express
const app = express();               // initialise the express

port = 3000;                         // defined the port where my server would be running

app.use(express.json());
// get api / get route.
// app.get expect a route url and a call back fn.

const middleWareFunction = (req, res, next) => {
    console.log('hi I am middleware fn. I would be executed based on the placement')
    next()
}

app.use(middleWareFunction); // init a middle

app.get('/', (req, res) => {
    return res.send('hello world')
})

app.use(middleWareFunction);
app.get('/name', (req, res) => {
    const name = req.query?.firstname
    console.log(name)
    return res.send(`hello ${name}`);
})

app.get('/getName/:name', (req, res) => {
    const name = req.params?.name
    console.log(name)
    return res.send(`hello ${name}`);
})

app.get('/hello', (req, res) => {
    return res.send('hello')
})

app.post('/getName', (req, res) => {
    const { firstName, lastName, age, gender } = req.body;
    console.log(firstName, lastName, age, gender);
    return res.send(`hello ${firstName} ${lastName}. Your age is ${age} and you are a ${gender}`);
})

app.listen(port, () => {
    console.log(`app running on port ${port}`);
})