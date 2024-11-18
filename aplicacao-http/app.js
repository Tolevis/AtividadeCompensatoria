const axios = require('axios');

axios.get('http://localhost:3000')
    .then(response => {
        console.log('Resposta do servidor REST:', response.data);
    })
    .catch(error => {
        console.log('Erro ao consumir o servidor REST:', error);
    });
