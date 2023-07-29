import { Router } from "express";
const router = Router()

router.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'SignUp | Ali Shop',
    })
})

router.post('/signup', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


router.get('/signin', (req, res) => {
    res.render('signin', {
        title: 'SignIn | Ali Shop',
    })
})

router.post('/signin', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


export default router