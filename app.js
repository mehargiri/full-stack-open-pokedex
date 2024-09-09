const express = require('express')
const app = express()
const logger = require('./src/logger.js')

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  return res.send('The current version is 5')
})

app.get('/health', (_req, res) => {
  return res.send('ok')
})

app.listen(PORT, () => {
  logger.info(`server started on port ${PORT}`)
})
