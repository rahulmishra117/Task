const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/AITASKAPP',{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Task = require("./task");