const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb+srv://jaychhatrola:111111JAY@cluster1-6gze1.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));