const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngsControllers");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.index);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)



/* routes.get('/users', (request, response) => {   

    return response.json({
        nome: 'Xao',
        sobrenome: 'Lolo'
    });
});

routes.get('/filtranome', (request, response) => { 
    const params = request.query;
    
    console.log(params);

    return response.json({
        Parametros:params["nome"]+" "+params["sobrenome"]
    })
});

routes.get('/filtraid/:id', (request, response) => { 
    const id = request.params;
    
    console.log(id);

    return response.json({
        ID: id["id"]
    })
});

routes.post('/gravanome', (request, response) => { 
    const body = request.body;
    
    console.log(body);

    return response.json({
        Msg:"Parabéns, "+body["name"]+" "+body["sobrenome"]+"! Seu cadastrado foi efetuado."
    })
});
*/

module.exports = routes;