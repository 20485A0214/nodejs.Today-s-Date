const express = require('express')
const app = express()

app.get('/', (request, response) => {
  const dateTime = newDate()
  response.send(
    `${dateTime.getDate()}-${
      dateTime.getMonth() + 1
    }-${dateTime.getFullYear()}`,
  )
})

module.exports = app
