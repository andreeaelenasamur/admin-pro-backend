require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors())

// Base de datos
dbConnection();

// 3u9sHwj3IzWVqAIc
// mean_user

// Rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));



app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});