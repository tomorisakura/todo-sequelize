const models = require('../models').Users;

const User = models;

module.exports = {
    get(req, res) {
        try {
            User.findAll()
            .then(result => {
                res.json({ status_code : 200, results : result });
                console.log(result);
            }).catch(err => {
                res.send(err);
                console.log(err);
            });
        } catch (error) {
            throw error;
        }
    },

    post(req, res) {
        let name = req.body.name;
        let hobby = req.body.hobby;

        User.create({
            name : name,
            hobby : hobby
        })
        .then((result) => {
            res.json({ status_code : 200, message : "Success post data", results : result });
        }).catch((err) => {
            res.send(err);
            console.log(err);
        });
    },

    update(req, res) {
        let id = req.query.id;

        const name = req.body.name;
        const hobby = req.body.hobby;

        User.update({
            name : name,
            hobby : hobby
        }, {
            where : {
                id : id
            }
        })
        .then((result) => {
            res.json({ status_code : 200, message : "Success update data", results : result });
        }).catch((err) => {
            res.send(err);
        });
    },

    delete(req, res) {
        const id = req.query.id;

        User.destroy({
            where : {
                id : id
            }
        })
        .then((result) => {
            res.json({ status_code : 200, message : "Success delete data", results : result });
        }).catch((err) => {
            res.send(err);
        });
    },

    getTodoByUser(req, res) {
        const id = req.query.id;

        User.findAll({
            where : {
                id : id
            },
            include : ['todos']
        })
        .then((result) => {
            res.json({ status_code : 200, results : result });
        }).catch((err) => {
            res.send(err);
        });
    }
}