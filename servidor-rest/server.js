const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servidor REST funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor REST rodando na porta ${port}`);
});
