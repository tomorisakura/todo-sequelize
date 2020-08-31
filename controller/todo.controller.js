const models = require('../models').Todos;

const Todos = models;

module.exports = {
    get(req, res) {
        Todos.findAll()
        .then((result) => {
            res.json({ status_code : 200, results : result });
        }).catch((err) => {
            res.send(err);
        });
    },

    post(req, res) {
        
        const usersId = req.body.id_users;
        const title = req.body.title;
        const content = req.body.content;

        Todos.create({
            id_users : usersId,
            title : title,
            content : content
        })
        .then((result) => {
            res.json({ status_code: 200, message : "Success post todo", results : result });
        }).catch((err) => {
            res.send(err);
        });
    }
}