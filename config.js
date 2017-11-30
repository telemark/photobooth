const config = {
  SSO_URL: process.env.SSO_URL || 'https://micro-auth-mock-xawzybdnnj.now.sh/login',
  ORIGIN_URL: `${process.env.ORIGIN_URL}/api/login` || 'http://localhost:3000/api/login',
  SAVE_URL: `${process.env.SAVE_URL}/api/save` || 'http://localhost:3000/api/save'
}

module.exports = {
  AUTH_URL: `${config.SSO_URL}?origin=${config.ORIGIN_URL}`,
  ...config
}
