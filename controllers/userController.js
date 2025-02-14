const users = require('../models/userModel')
const bcrypt = require('bcrypt')

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