const users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require(`jsonwebtoken`)

// add user controller

exports.addUserController = async (req, res)=>{
    console.log(`Inside Add user Controller`);

    const {username, email, password } = req.body

    try {
        const exitstingUser = await users.findOne({email})
        if(exitstingUser){
            res.status(406).json(`User already exist... Please Login`)
        }else{
            const encryptedPassword = await bcrypt.hash(password,10)
            const newUser = new users({
                username, email, password:encryptedPassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
}

// login
exports.loginController = async (req, res)=>{
    console.log(`Inside LoginController`);
    const {email, password} = req.body
    try {
        const existingEmail = await users.findOne({email})
        if(existingEmail){
            let isUserPswdMatch = await bcrypt.compare(password, existingEmail.password)
            if(isUserPswdMatch || password==existingEmail.password){
                const token = jwt.sign({userId:existingEmail._id},process.env.JWTPASSWORD)
                res.status(200).json({user:existingEmail, token})
            }else{
                res.status(404).json(`Invalid email / Password`)
            }

        }else{
            res.status(404).json(`Invalid email / Password`)
        }
    } catch (error) {
        res.status(401).json(error)
    }
    
}