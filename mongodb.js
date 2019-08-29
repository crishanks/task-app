//CRUD

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database!')
  }
  
  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectID("5d67440629ae591bbec1fdbd") }, (error, user) => {
  //   if (error) {
  //     return console.log('Could not fetch.')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 27 }).count((error, count) => {
  //   console.log(count)
  // })

  db.collection('tasks').findOne({ _id: new ObjectID("5d6744f7bfc6431beb9c40cb") }, (error, task) => {
    console.log(task)
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    console.log(tasks)
  })
})