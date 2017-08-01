var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
   var todo = new Todo({
     text: req.body.text
   });
   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send(todos);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
if(!ObjectID.isValid(id)) {
  return res.status(404).send();
}
    Todo.findById(id).then((todo) => {
     if (!todo) {
       return res.status(404).send();
     }
    res.status(200).send({todo});

   }).catch((e) => {
     res.status(400).send();
   })
});
app.delete('/todos/:id',(req,res) => {
  var id = req.params.id;
if(!ObjectID.isValid(id)) {
  return res.status(404).send();
}
    Todo.findById(id).then((todo) => {
     if (!todo) {
       return res.status(404).send();
     }
     Todo.findByIdAndRemove(id).then((result) => {
       res.status(200).send({todo});
     });

   }).catch((e) => {
     res.status(400).send();
   })

});
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
