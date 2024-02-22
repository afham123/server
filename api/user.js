const express = require('express');
const router = express.Router();
const { userModel } = require('../Model/user')

// get api / get route.
// app.get expect a route url and a call back fn.
router.get('/name', (req, res) => {
    const name = req.query?.firstname
    console.log(name)
    return res.send(`hello ${name}`);
})

router.get('/getName/:name', (req, res) => {
    const name = req.params?.name
    console.log(name)
    return res.send(`hello ${name}`);
})

router.post('/getName', (req, res) => {
    const { firstName, lastName, age, gender } = req.body;
    console.log(firstName, lastName, age, gender);
    return res.send(`hello ${firstName} ${lastName}. Your age is ${age} and you are a ${gender}`);
})

router.post('/createUser', (req, res) => {
    const { firstName, lastName, gender, password, email } = req.body;

    userModel.create({ firstName, lastName, gender, password, email })

})

module.exports = router;