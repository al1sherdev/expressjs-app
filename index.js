import express from 'express'
import {create, engine} from 'express-handlebars'
import mongoose from 'mongoose'
import AuthRoutes from './routes/auth.js'
import ProductsRoutes from './routes/product.js'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

const hbs = create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use(AuthRoutes)
app.use(ProductsRoutes)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}, () => { console.log("Connected mongodb") })

const PORT = process.env.PORT || 4100 
app.listen(4100, () => console.log(`Server is starting: ${PORT}`)) 