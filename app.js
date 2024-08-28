const express = require('express')
const app = express()
const logger = require('./src/logger.js')

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  logger.info(`server started on port ${PORT}`)
})
