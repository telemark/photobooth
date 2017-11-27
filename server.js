const micro = require('micro')
const { send, json } = micro
const { parse } = require('url')
const redirect = require('micro-redirect')
const { JWT_SECRET, SESSION_KEY, STORAGE_TOKEN } = require('./secrets')
const session = require('micro-cookie-session')({
  name: 'session',
  keys: [SESSION_KEY],
  maxAge: 24 * 60 * 60 * 1000
})
const next = require('next')
const jwt = require('jsonwebtoken')
const { upload } = require('now-storage')
const { AUTH_URL } = require('./config')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const storageOptions = {
  deploymentName: 'tfk-photobooth',
  teamId: 'telemark-dev',
  retry: {
    retries: 3
  }
}

const server = micro(async (req, res) => {
  session(req, res)
  const { query, pathname } = await parse(req.url, true)
  const payload = req.method === 'POST' ? await json(req) : query
  if (pathname.includes('/api/login')) {
    const token = payload.jwt
    try {
      const { data: verifiedToken } = jwt.verify(token, JWT_SECRET)
      req.session.decodedToken = verifiedToken
      redirect(res, 302, '/')
    } catch (error) {
      console.error(error)
      redirect(res, 302, AUTH_URL)
    }
  } else if (req.method === 'POST' && pathname.includes('/api/save')) {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*')
      const file = { name: payload.name, content: payload.content }
      const { url } = await upload(STORAGE_TOKEN, file, storageOptions)
      redirect(res, 302, `https://${url}`)
    } catch (error) {
      send(res, 500, error)
    }
  } else {
    return handle(req, res)
  }
})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
