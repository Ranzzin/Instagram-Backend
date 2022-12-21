const User = require('../Models/User')
const Post = require('../Models/Post')

module.exports = {
    async getProfile(req, res) {
        const { user_id } = req.params

        try {
            const userInfo = await User.findById(user_id)
            if (!userInfo) return res.status(400).send({
                message: 'User does not exist'
            })

            const userPost = await Post.find({
                user: user_id
            })

            return res.status(200).send({
                message: 'User found',
                userInfo,
                userPost
            })

        } catch(err){
            return res.status(400).send(err)
        }
    }
}