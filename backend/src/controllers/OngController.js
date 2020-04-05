//crypto para criptografia, mas tbm pode ser gerado uma string aleatória
const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    //Listagem dos dados
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
    
        //criando id da ong aleatório e convertendo em hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
    
        //conexão com BD
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};