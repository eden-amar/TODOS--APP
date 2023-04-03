const User = require("../models/user");

async function login(res, req) {
    const credentials = req.body;
    console.log(req.body);  
    try {
        const user = await User.findOne({
            email: credentials.email,
            password: credentials.password
        })
            .select('firstName lastName email')
            .exec();

        if (user) {
            res.set('set-cookie', 'user=' + user._id)
            res.json(user);
        }
        else {
            res.status(401).json({ message: 'not authorized' })
        }
    } catch {
        res.status(500).json({ message: 'failed to login' });
    }
}

async function register(res, req) {
    
    console.log('req.body', req.body)

    try {
        const newUser = new User(req.body);

        await newUser.save();
    
        res.status(200).json(newUser);
    } catch(e) {
        console.log('Server Error: ', e)
        res.status(500).json({ message: 'failed to register' });
    }
    

}

function getUserInfo() {
}

module.exports = {
    login,
    register,
    getUserInfo
}

