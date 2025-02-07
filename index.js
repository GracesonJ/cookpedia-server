//1 import dotenv with config
require("dotenv").config()

//2import express
const express = require("express")

//3 import cors
const cors = require("cors")

//10 import connection file
require('./config/connection')

//11 import router
const router = require('./routes/router')

//4create server
const cookpediaServer = express()

//5 tell server to use cors to comminucate with request
cookpediaServer.use(cors())

//6 convert json to parse json formate to js
cookpediaServer.use(express.json())

//12 tell server to use router
cookpediaServer.use(router)

//7 set port
const PORT = 3000 || process.env.PORT

//8 run server or listen server
cookpediaServer.listen(PORT,()=>{
    console.log(`Cookpedia Server started at Port : ${PORT} and waiting for client request!!!`);
})

//9 check server is working
cookpediaServer.get(`/`,(req,res)=>{
    res.status(200).send(`<h1 style="color:blue;">Cookpedia Server started and waiting for client request!!!</h1>`)
})

