const User = require('../models/User');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose.util');
class AuthController {
    // [POST] /auth/register
    async registerNewUser(req, res, next) {
        try {
            const formData = req.body;
            const user = new User(formData);
            await user.save();
            res.json({ status: 200 });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }
    

    // [POST] /auth/login
    async loginUser(req, res) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            
            const user = await User.findOne({username})
            if(!user) {
                res.json({ message: 'Wrong username', status: 404 });
            }

            const validPassword = await password === user.password;
            if(!validPassword) {
                res.json({ message: 'Wrong password', status: 404 });
            }

            if(user && validPassword) {
                res.json({ user, status: 200 });
            }
        } catch (error) {
            res.json(err)
        }
    }
}

module.exports = new AuthController;