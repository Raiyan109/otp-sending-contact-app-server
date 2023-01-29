import express from 'express'
const router = express.Router()
import UserController from '../controllers/userController.js'


// Public Routes
router.get('/login', UserController.userLogin)

export default router