const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next)=>{
    console.log(`Inside Jwt Middleware`);
    const token = req.headers["authorization"].split(" ")[1]
    if(token){
        try {
            const jwtResponse = jwt.verify(token, process.env.JWTPASSWORD)
            req.userId = jwtResponse.userId
            next()
        } catch (error) {
            res.status(401).json(`Authorisation failed... PLease Login`)
        }
    }else{
        res.status(404).json("Authorisation failed... Token is Missing")
    }
    
}

module.exports = jwtMiddleware