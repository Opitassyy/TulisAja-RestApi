const mongoose = require('mongoose')

const userSchema = mongoose.Scema({
    username: {
        type: String,
        required: true,
        max: 45
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    }
}, {
    versionKey: false

})

nodule.exports = mongoose.nodel('User', userSchema, 'user')
