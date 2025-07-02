const express = require('express');
const app = express();

const particlesRoutes = require('./routes/particles');
app.use(express.json());

app.get('/', (req, res) => res.send('API!'));

app.use('/particles', particlesRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

module.exports = app