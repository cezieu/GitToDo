const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  };
  console.log('Connected to MongoDB server!');
//deleteMany
//  db.collection('Todos').deleteMany({text: 'Something else'}).then((result) => {
//    console.log(result);
//  });
//deleteOne
//  db.collection('Todos').deleteOne({text: 'Something else'}).then((result) => {
//    console.log(result);
//  });
//findOneAndDelete
 db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result) => {
   console.log(result);
 });
  //db.close();
});
