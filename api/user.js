const express = require('express');
const router = express.Router();
const { userModel } = require('../Model/user');
const { query, validationResult } = require('express-validator')
const { getNameValidator, createUserValidator } = require('../validation/getNameValidator')

// get api / get route.
// app.get expect a route url and a call back fn.
// http://localhost:3000/user/name/?firstName=edwad
router.get('/name', (req, res) => {
    const name = req.query?.firstname;
    console.log(name)
    if (name)
        return res.send(`hello ${name}`);
    else return res.send('Please enter the name, name is missing');
})

// http://localhost:3000/user/getName/edwad
router.get('/getName/:name', query('name').notEmpty(), (req, res) => {
    const result = validationResult(req);
    const name = req.params?.name
    console.log(name)
    if (!result.isEmpty())
        return res.send(`hello ${name}`);    // hello edward
    else
        return res.send('please enter the name')
})

router.post('/getName', getNameValidator(), (req, res) => {
    const { firstName, lastName, age, gender, email } = req.body;
    const result = validationResult(req);
    if (result.errors.length !== 0)
        return res.send(result.errors.map((elem) => elem.msg))

    console.log(firstName, lastName, age, gender);
    if (firstName && lastName && age && gender)
        return res.send(`hello ${firstName} ${lastName}. Your age is ${age} and you are a ${gender}`);
    else return res.send('please enter the required information')
})

router.post('/createUser', createUserValidator(), async (req, res) => {
    const { firstName, lastName, gender, password, email } = req.body;

    const result = validationResult(req);
    if (result.errors.length !== 0)
        return res.send(result.errors.map((elem) => elem.msg))

    const doc = await userModel.create({ firstName, lastName, gender, password, email })
    return res.json(doc);
})

module.exports = router;