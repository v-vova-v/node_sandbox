const {MongoClient, ObjectID} = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');

connectUrl = 'mongodb://127.0.0.1:27017';
dbName = 'task-manager';

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// MongoClient.connect(connectUrl, {useNewUrlParser: true}, (error, client) => {
//   if (error) {
//     return console.log('unable to connect');
//   }

//   const db = client.db(dbName);
//   const getTaskmanagerCollection = (collectionName) => {
//     return db.collection(collectionName);
//   };
//   db.collection('users').insertOne({
//     name: 'vova',
//     age: 29,
//   });

//   db.collection('task').insertMany([
//     {
//       description: 'task one',
//       completed: true,
//     },
//     {
//       description: 'task two',
//       completed: true,
//     },
//     {
//       description: 'task three',
//       completed: false,
//     },
//   ], (error, result) => {
//     if (error) {
//       return console.log('error while writing');
//     }

//     console.log(result.ops);
//   });
//   getTaskmanagerCollection('task').findOne({_id: new ObjectID('5e345806a0f877429c4ae698')}, (error, result) => {
//     if (error) return console.log('unable to get data');

//     console.log(result);
//   });

//   getTaskmanagerCollection('task').find({completed: true}).toArray().then((value) => {
//     console.log(value);
//   });

//   getTaskmanagerCollection('task').updateMany({
//     completed: false,
//   }, {
//     $set: {
//       completed: true,
//     },
//   }).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });
// });


// const Task = mongoose.model('Task', {
//   description: String,
//   completed: Boolean,
// });

// const User = mongoose.model('User', {
//   password: {
//     type: String,
//     required: [true, 'pasword required'],
//     trim: true,
//     minlength: 6,
//     validate: {
//       validator(input) {
//         return !input.includes('password');
//      },
//      message(props) {
//        return 'it is not possible to include "password" value';
//      },
//     },
//   },
//   name: {
//     require: true,
//     type: String,
//   },
// });

// const newUser = new User({
//   user: 'Vova',
//   password: '',
// });

// newUser.save().then(() => {
//   console.log('new user saved!');
// });

// const newTask = new Task({
//   description: 'new task1',
//   completed: false,
// });

// newTask.save().then(() => {
//   console.log('success');
// });
