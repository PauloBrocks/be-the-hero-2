const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        })
    
        return response.json({id, name});
    },

    async delete(request, response){
        const {id} = request.params;

        const [incidents] = await connection('incidents')
                .where('ong_id', id).count();


        if(incidents['count(*)']>0){
            return response.json('Delete os casos antes de deletar a Ong.');
        }else{
            await connection('ongs').where('id', id).delete()
            return response.json('Ong '+id+' deletada.');
        }
        
    }

}