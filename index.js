const express = require('express');
const expresshbs = require('express-handlebars');

const bodyParser = require('body-parser');

const messagebird = require('messagebird')('J3ztvuCWoT7wgUUZyX18rqUnB')

const app = express();

app.engine('handlebars', expresshbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('step1')
})


app.listen(5000, () => {
    console.log('App is running on Port 5000');
})




































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
