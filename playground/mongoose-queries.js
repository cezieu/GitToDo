const ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
//var id = '5979c64e6eabba1f856a673f';
//
//if (!ObjectID.isValid(id)) {
//  console.log('ID not valid');
//}
//
//Todo.findById(id).then((todo) => {
//  if (!todo) {
//    return console.log('Id not found!');
//  }
//  console.log('Todos', todo);
//}).catch((e) => console.log(e));
var userID = '5979cfd1895c912374596985';

User.findById(userID).then((user) => {
  if (!user){
    return console.log('Id not found!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
