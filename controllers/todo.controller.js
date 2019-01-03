const Todo = require('../models/todo.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.show = function (req, res, next) {
    Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    });
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

exports.update = function (req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return next(err);
        res.send('Todo Updated Successfully!');
    });
};