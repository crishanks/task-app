//CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database!')
  }
  
  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Cris',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jeff',
  //     age: 29
  //   },
  //   {
  //     name: 'Dave',
  //     age: 29
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents!')
  //   }
    
  //   console.log(result.ops)
  // })

  db.collection('tasks').insertMany([
    {
      description: 'Take out the trash',
      completed: false
    },
    {
      description: 'Dishes',
      completed: true
    },
    {
      description: 'Clean room',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert documents!')
    }

    console.log(result.ops)
  })

})