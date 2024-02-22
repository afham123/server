const express = require('express');
const router = express.Router()

router.get('/mybook', (req, res) => {
    console.log(req.query);
    const name = req.query?.bookName
    console.log(name)
    return res.send(`My book name is ${name}`);
})

module.exports = router;