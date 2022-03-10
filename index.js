require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());


const PORT = 3000;

app.post('/create');

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));