const middleWareFunction = (req, res, next) => {
    console.log('hi I am middleware fn. I would be executed based on the placement')
    next()
}

module.exports = { middleWareFunction };