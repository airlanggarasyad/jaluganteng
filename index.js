if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello Jalu" })
})

app.get('/ganteng', (req, res) => {
  res.status(200).json({ message: "Hello Jalu Ganteng Ganteng Sekali" })
})

app.get('/jaluAuth', (req, res) => {
  res.status(200).json({ message: "Download jaluAuth on Apple App Store or Google Play Store" })
})

app.get('/promo', (req, res) => {
  res.status(200).json({ message: "Promonya keren" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${process.env.NODE_ENV} ${process.env.PORT}`)
})
