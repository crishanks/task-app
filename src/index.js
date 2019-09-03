const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('The site is under maintenance. Please come back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5d6dab4fee9bf5678ddb2d31')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5d6daaabb7aac9677becbc46')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()