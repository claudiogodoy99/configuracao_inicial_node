import express from 'express'

const app = express()

app.get('/', (req, resp) => {
  return resp.status(200)
})

app.listen(3333)
