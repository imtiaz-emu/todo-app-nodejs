const Todo = require('../models/todo.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create = function (req, res, next) {
    let todo = new Todo(
        {
            description: req.body.description
        }
    );

    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Todo Created successfully')
    })
};