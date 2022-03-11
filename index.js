require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const createClientController = require('./src/controllers/cliente/createClientController');
const findAllClientController = require('./src/controllers/cliente/findAllController');
const findById = require('./src/controllers/cliente/findByName');
const updateClient = require('./src/controllers/cliente/updateClientController');
const removeClient = require('./src/controllers/cliente/removeClientController');

const PORT = 3000;

// Rotas de cliente --------------------------------
app.post('/register', createClientController);
app.get('/client', findAllClientController);
app.get('/client/:id', findById);
app.put('/client/update/:id', updateClient);
app.delete('/remove/:id', removeClient);


const findAllMoviment = require('./src/controllers/movimentacao/findAllController');
const findByIdMoviment = require('./src/controllers/movimentacao/findById');



// Rotas de movimentações
app.post('/create');
app.get('/moviment', findAllMoviment);
app.get('/moviment/:id', findByIdMoviment);
app.put('/moviment/update/:id');
app.delete('/remove/:id');

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));