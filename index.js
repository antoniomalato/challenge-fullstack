require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

const createClientController = require('./src/controllers/cliente/createClientController');
const findAllClientController = require('./src/controllers/cliente/findAllController');
const findById = require('./src/controllers/cliente/findByName');
const updateClient = require('./src/controllers/cliente/updateClientController');
const removeClient = require('./src/controllers/cliente/removeClientController');
// const findClientDetails = require('./src/controllers/cliente/findClientDetails');


// Rotas de cliente --------------------------------
app.post('/register', createClientController);
// app.get('/client/details/:id', findClientDetails);
app.get('/client', findAllClientController);
app.get('/client/:id', findById);
app.put('/client/update/:id', updateClient);
app.delete('/remove/:id', removeClient);
// -------------------------------------------------

const findAllMoviment = require('./src/controllers/movimentacao/findAllController');
const findByIdMoviment = require('./src/controllers/movimentacao/findById');
const updateMoviment = require('./src/controllers/movimentacao/updateMovController');
const removeMoviment = require('./src/controllers/movimentacao/removeMovController');
const createMoviment = require('./src/controllers/movimentacao/createMovController');

// Rotas de movimentações --------------------------
app.post('/create', createMoviment);
app.get('/moviment', findAllMoviment);
app.get('/moviment/:id', findByIdMoviment);
app.put('/moviment/update/:id', updateMoviment);
app.delete('/moviment/remove/:id', removeMoviment);


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));