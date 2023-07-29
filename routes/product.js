import { Router } from "express";
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Ali Shop'
    })
})

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'Products | Ali Shop',
        isProducts: true
    })
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add product | Ali Shop',
        isAdd: true
    })
})

router.get('/support', (req, res) => {
    res.render('support', {
        title: 'Support || Ali Shop',
        isSupport: true
    })
})


export default router