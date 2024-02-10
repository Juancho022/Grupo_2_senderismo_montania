require('dotenv').config();

const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require('cookie-parser');
const bodyParser = require('body-parser');

//Ejecutamos el llamado a las rutas
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const inventoryRoutes = require('./routes/inventory');
const helpRoutes = require('./routes/ayuda');

//Rutas de las APIs
const productsApiRoutes = require('./routes/api/productRoutes'); 

const authentication = require('./middlewares/authentication');
const remember = require('./middlewares/rememberMiddleware');

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
    secret: "ab33025avbtxop00002tqxr!"
})) //token de encriptación
app.use(cookies());
app.use(authentication);
app.use(remember);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/help', helpRoutes);
app.use('/api/products', productsApiRoutes);


const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
