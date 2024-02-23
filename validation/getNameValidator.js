const { body, query } = require("express-validator")

function getNameValidator() {
    return [
        body('firstName')
            .notEmpty().withMessage('Please Enter the firstName'),
        body('lastName')
            .notEmpty().withMessage('Please Enter the lastName'),
        body('age')
            .notEmpty().withMessage('Please Enter the age')
            .isNumeric().withMessage('Please enter a number'),
        body('gender')
            .notEmpty().withMessage('Please Enter the lastName'),
        body('email')
            .notEmpty().withMessage('Please provide the mail')
            .isEmail().withMessage('Email is not in correct format')
    ]
}

function createUserValidator() {
    return [
        body('firstName')
            .notEmpty().withMessage('Please Enter the firstName'),
        body('lastName')
            .notEmpty().withMessage('Please Enter the lastName'),
        body('gender')
            .notEmpty().withMessage('Please Enter the lastName'),
        body('email')
            .notEmpty().withMessage('Please provide the mail')
            .isEmail().withMessage('Email is not in correct format'),
        body('password')
            .notEmpty().withMessage('Password should not be empty'),

    ]
}

module.exports = { getNameValidator, createUserValidator }