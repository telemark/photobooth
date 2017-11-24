const config = {
  SSO_URL: process.env.SSO_URL || 'https://micro-auth-mock-xawzybdnnj.now.sh/login',
  ORIGIN_URL: process.env.NOW_URL ? `${process.env.NOW_URL}/api/login` : 'http://localhost:3000/api/login'
}

module.exports = {
  AUTH_URL: `${config.SSO_URL}?origin=${config.ORIGIN_URL}`,
  ...config
}
