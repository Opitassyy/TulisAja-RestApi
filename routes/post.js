const express = require('express')
const router = express.Router()
const post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const Post = await post.find()
        res.json(post)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router