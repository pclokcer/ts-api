import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import i18next from 'i18next'
import i18nextFsBackend from 'i18next-fs-backend'
import i18nextHttpMiddleware from 'i18next-http-middleware'

i18next.use(i18nextHttpMiddleware.LanguageDetector).use(i18nextFsBackend).init({
  fallbackLng: "en",
  backend: {
    loadPath: "./locales/{{lng}}.json"
  },
})

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(i18nextHttpMiddleware.handle(i18next))

app.get('/', (req, res) => {
  res.send('Hello World! 33')
})

/**
* Not Found
*/
app.use((err, req, res, next) => {

  if (err) {
    return res.status(400).json({ success: false, message: err.message })
  }

  return res.status(404).json({ success: false, message: req.t('not_found') })

})

const port = process.env.PORT
app.listen(port, () => console.log("backend app listening on port " + port))