const Post = require('../models/Post')

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id)
        post.likes += 1
        await post.save()

        // informs all connected users of the new data
        req.io.emmit('like', post)

        return res.json(post)
    }
}