const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017');

mongoose.connection.on('error', (error) => {
  console.error(`Mongoose Connection Error : ${error}`);
  throw error;
});

console.log('MongoDB is now connected');
