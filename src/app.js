const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require ('express-session');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const inventoryRoutes = require('./routes/inventory');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
    secret:"ab33025avbtxop00002tqxr!"
})) //token de encriptación

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
}); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/inventory', inventoryRoutes);


const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
