const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  };
  console.log('Connected to MongoDB server!');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5979b21b75357eac3875c1a6")
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  //db.close();
});
