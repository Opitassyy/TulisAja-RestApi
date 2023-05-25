const express = require('express')
const Post = require('../models/Post')
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

router.post('/', async (req, res) => {
    const inputPost = new Post({
        content: req.body.content,
        user_id: req.body.user_id,
        username: req.body.username
    })

    try {
        const post = await inputPost.save()
        res.json(inputPost)
    } catch (error) {
        res.json({
            message: error
        })
    }

})

router.put('/:postId', async (req, res) => {
    const data = {
        content: req.body.content,
    }
    try {
        const post = await Post.updateOne({
            _id: req.params.postId
        }, data)
        res.json(post)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const post = await Post.updateOne({
            id: req.params.postId
        }, data)
        res.json(post)
    } catch (error) {
        res.json({
            message: error
        })

    }
})

module.exports = router