const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const user = require('../models/User')

// import validation
const { registerValidation, loginValidation} = require('../config/validation')
const res = require('express/lib/response')

function result (succ, msg, details) {
    if (details) {
        return {
            success: succ,
            message: msg,
            data: details
        }
    } else {
        return {
            success: succ,
            message: msg 
        }
    }
}

// register
router.post('/register', async (req, res) => 
    const {error} = registerValidation(req.body)
    if (error) return res.status(200).json(result(0, error.details[0].message))

    //username exist
    const usernameExist = await user.findOne({ username: req.body.username})
})