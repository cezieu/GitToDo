const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  };
  console.log('Connected to MongoDB server!');
  
  db.collection('Users').find({name: 'Idiot'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined , 2));
  });


  //db.close();
});
