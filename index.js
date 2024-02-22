const express = require('express');   // imported express
const app = express();               // initialise the express
port = 3000;                         // defined the port where my server would be running
const { middleWareFunction } = require('./middleware');
const userRoute = require('./api/user');
const bookRote = require('./api/book')

app.use(express.json());
app.use(middleWareFunction); // init a middle

app.use('/user', userRoute);
app.use('/book', bookRote);

app.get('/', (req, res) => {
    try {
        const ob = {}
        ob.name = a
        console.log(ob.name)
        console.log(ob)
        return res.send('hello world')

    }
    catch (err) {
        return `some issue has happened in the api ${err.message}`
    }
})

app.use(middleWareFunction);
app.get('/hello', (req, res) => {
    return res.send('hello')
})
app.listen(port, () => {
    console.log(`app running on port ${port}`);
})