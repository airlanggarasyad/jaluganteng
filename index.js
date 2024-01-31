if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello BLFP 9" })
})

app.get('/ganteng', (req, res) => {
  res.status(200).json({ message: "Hello Jalu Ganteng Ganteng Sekali" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${process.env.NODE_ENV} ${process.env.PORT}`)
})
