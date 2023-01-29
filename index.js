import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())


// Load Routes
app.use("/api/user", userRoutes)


// app.get('/', (req, res) => {
//     res.send('hello')
// })

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})


















































// const express = require('express');
// const expresshbs = require('express-handlebars');

// const bodyParser = require('body-parser');

// const messagebird = require('messagebird').initClient('bZf2eWnn9pgjySx1ZfQmvnnnz')


// // Set up and configure the express framework
// const app = express();
// app.engine('handlebars', expresshbs.engine({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars')
// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     res.render('step1')
// })


// // Handle phone number submission
// app.post('/step2', (req, res) => {
//     let number = req.body.number


//     // Make request to Verify API
//     messagebird.verify.create(number, {
//         template: 'Your Verification code is %token'
//     }, function (err, response) {
//         if (err) {
//             console.log(err);
//             res.render('step1', {
//                 error: err.errors[0].description
//             })
//         }
//         else {
//             console.log(response);
//             res.render('step2', {
//                 id: response.id
//             })
//         }
//     })
// })


// // Verify whether the token is correct
// app.post('/step3', (req, res) => {
//     let id = req.body.id
//     let token = req.body.token

//     // Make request to Verify API
//     messagebird.verify.verify(id, token, (err, response) => {
//         if (err) {
//             res.render('step2', {
//                 error: err.errors[0].description,
//                 id: id
//             })
//         }
//         else {
//             res.render('step3')
//         }
//     })
// })

// app.listen(5000, () => {
//     console.log('App is running on Port 5000');
// })




































// const express = require('express')
// const cors = require('cors');
// require('dotenv').config()
// const ejs = require('ejs')

// const app = express()
// const mongoose = require('mongoose')


// // setting body-parser,view engine and static directory
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

// app.use(cors())
// // app.use(express.json())


// // mongoose database connection
// const connectDB = async () => {
//     await mongoose.connect(process.env.MONGO_URI)
//     console.log('MongoDB connected');
// }
// connectDB()


// // scheme and model
// const contactSchema = new mongoose.Schema({
//     users: Number,
// })

// const OTP = mongoose.model('OTP', contactSchema)




















// // home route
// app.get('/', (req, res) => {
//     res.render('hello from contact app server')
// })

// // setting the port
// // const port = process.env.PORT || 5000
// let port = process.env.PORT
// if (port == null || port == "") {
//     port = 5000
// }


// app.listen(port, () => {
//     console.log('contact app started here');
// })
