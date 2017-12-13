
require('babel-register');

import cin from './routers/cin'
import helmet from 'helmet'
import cors from 'cors'

const app = new (require('express'))()
const defaultPort = 3000
const port = process.env.PORT || defaultPort;

require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
})

// initalize webpack dev middleware if in development context
if (process.env.NODE_ENV === 'development') {
  let webpack = require('webpack')
  let config = require('../webpack.config')

  let devMiddleware = require('webpack-dev-middleware')
  let hotDevMiddleware = require('webpack-hot-middleware')
  let compiler = webpack(config)
  let devMiddlewareConfig = {
    noInfo: true,
    stats: {colors: true},
    publicPath: config.output.publicPath
  }

  app.use(devMiddleware(compiler, devMiddlewareConfig))
  app.use(hotDevMiddleware(compiler))
}

app.use('*', cors())
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

app.use((req, res, next) => {
  // init res
  res.responseOK = (msg = 'OK') => {
    res.json({msg})
  }

  next()
})

app.use(require('express').static('public'))

app.use('/api/cin', cin)

app.get('*', require('./serverRender'))

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})