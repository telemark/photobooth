const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)
const next = require('next')
const jwt = require('jsonwebtoken')
const { upload } = require('now-storage')

const { JWT_SECRET, SESSION_KEY, STORAGE_TOKEN } = require('./secrets')
const { AUTH_URL } = require('./config')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const jsonParser = bodyParser.json()

const storageOptions = {
  deploymentName: 'tfk-photobooth',
  retry: {
    retries: 3
  }
}

app.prepare()
.then(() => {
  const server = express()

  server.use(session({
    secret: SESSION_KEY,
    saveUninitialized: true,
    store: new FileStore({path: '/tmp/sessions', secret: SESSION_KEY}),
    resave: false,
    rolling: true,
    httpOnly: true,
    cookie: { maxAge: 604800000 } // week
  }))

  server.get('/api/login', (req, res) => {
    const token = req.query.jwt
    if (!token || !jwt.verify(token, JWT_SECRET)) {
      res.redirect(AUTH_URL)
    } else {
      const { data } = jwt.decode(token)
      req.session.decodedToken = data
      res.redirect('/')
    }
  })

  server.post('/api/save', jsonParser, async (req, res) => {
    if (!req.body) {
      return res.sendStatus(400)
    }
    try {
      console.log(req.body)
      const file = {name: req.body.name, content: req.body.content}
      const { url } = await upload(STORAGE_TOKEN, file, storageOptions)
      res.send({url: url})
    } catch (error) {
      console.error(error)
      res.sendStatus(500)
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
