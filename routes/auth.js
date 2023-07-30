import { Router } from "express";
import User from "../models/Users.js";
import bcrypt, { hash } from 'bcrypt'
const router = Router()


// REGISTER USERS
router.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'SignUp | Ali Shop',
    })
})

router.post('/signup', async (req, res) => {
    // password hashed
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const userData = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
    }
    // create user mongoodb
    const user = await User.create(userData)
    console.log(user)
    res.redirect('/')
})


// LOGIN USERS
router.get('/signin', (req, res) => {
    res.render('signin', {
        title: 'SignIn | Ali Shop',
    })
})

router.post('/signin', async (req, res) => {
    const existUser = await User.findOne({ email: req.body.email })
    if(!existUser) {
        console.log('User not found!')
        return   
    } 

    const isPassEqual = await bcrypt.compare(req.body.password, existUser.password)
    if(!isPassEqual) {
        console.log("Password wrong")
        return 
    } 

    console.log(existUser)
    res.redirect('/')
})


export default router