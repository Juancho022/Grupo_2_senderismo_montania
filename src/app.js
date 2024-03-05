require('dotenv').config();


const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require('cookie-parser');
const bodyParser = require('body-parser');
const authMiddlewares = require("./middlewares/authMiddleware");

const cors = require('cors');

//Ejecutamos el llamado a las rutas
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const inventoryRoutes = require('./routes/inventory');
const helpRoutes = require('./routes/ayuda');
const aboutUsRoutes = require('./routes/aboutUs');

//Rutas de las APIs
const productsApiRoutes = require('./routes/api/productRoutes');
const countProductApiRoutes = require('./routes/api/countProductRoutes');
const countCategorieRoutes = require('./routes/api/countCategorieRoutes');
const categoryRoutes = require('./routes/api/categoryRoutes');
const usersApiRoutes = require('./routes/api/usersRoutes');




const authentication = require('./middlewares/authMiddleware');
const forAdmin = require('./middlewares/forAdminMiddleware')
const app = express(); 


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets/images', express.static(path.join(__dirname, 'src', 'assets', 'images')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(cookies());
app.use(session({
    secret: "ab33025avbtxop00002tqxr!",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // Configura las opciones de la cookie. `secure: false` significa que las cookies se pueden transmitir a través de HTTP. `maxAge` es la duración de la cookie en milisegundos.
})) //token de encriptación
app.use(authMiddlewares.authUser);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(cors());
app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/help', helpRoutes);
app.use('/api/products', productsApiRoutes);
app.use('/api', countProductApiRoutes);
app.use('/api', countCategorieRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/aboutUs', aboutUsRoutes);
app.use('/api/users', usersApiRoutes);




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
