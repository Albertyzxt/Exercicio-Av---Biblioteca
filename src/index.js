const express = require('express');
const app = express();
const port = 5600;

app.use(express.json());

const livroRoutes = require('./routes/livroRoutes.js');
const estudanteRoutes = require('./routes/estudanteRoutes.js');
const aluguelRoutes = require('./routes/aluguelRoutes.js');

app.use('/livros', livroRoutes);
app.use('/estudantes', estudanteRoutes);
app.use('/aluguel', aluguelRoutes);

app.listen(port, () => {
    console.log(`Server iniciado na porta ${port}`);
});