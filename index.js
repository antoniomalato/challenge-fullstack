require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const createClientController = require('./src/controllers/cliente/createClientController');
const findAllClientController = require('./src/controllers/cliente/findAllController');
const findByName = require('./src/controllers/cliente/findByName');
const updateClient = require('./src/controllers/cliente/updateClientController');
const removeClient = require('./src/controllers/cliente/removeClientController');

const PORT = 3000;

app.post('/register', createClientController);

app.get('/client', findAllClientController);
app.get('/:client', findByName);

app.put('/', updateClient);

app.delete('/remove', removeClient);


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));