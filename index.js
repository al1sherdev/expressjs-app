import express from 'express'
import {create, engine} from 'express-handlebars'
import AuthRoutes from './routes/auth.js'
import ProductsRoutes from './routes/product.js'

const app = express()

const hbs = create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(AuthRoutes)
app.use(ProductsRoutes)

const PORT = process.env.PORT || 4100 
app.listen(4100, () => console.log(`Server is starting: ${PORT}`)) 