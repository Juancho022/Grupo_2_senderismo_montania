const express = require('express');
const path = require('path');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);
app.use('/user', userRoutes);

const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
});
