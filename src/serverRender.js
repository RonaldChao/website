import 'babel-polyfill'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import _reducers from './reducers'
import { Provider } from 'react-redux';
import matchConfig from './matchConfig'
import {
  StaticRouter,
  Route,
  Switch,
  matchPath
} from 'react-router-dom'


function serverRender(req, res) {
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    compose

  const store = createStore(
    _reducers,
    composeEnhancers(applyMiddleware(thunk))
  )

  let initState;
  matchConfig.some(route => {
    const match = matchPath(req.url, route)
    if (match) {
      initState = route.initState
    }
    return match
  })

  store.dispatch(initState(store, req, res))
    .then(() => {
      renderStoreRouter(store, req, res)
    })
}

function renderStoreRouter(store, req, res) {
  const context = {}
  const componentStr = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Switch>
          {
            matchConfig.map((route, index) => <Route key={`route${index}`} {...route} />)
          }
        </Switch>
      </StaticRouter>
    </Provider>
  )
  res.send(renderFullPage(componentStr, store.getState()))
}


function renderFullPage(html, preloadedState) {
  let vendorJS = ''
  let bundleCSS = ''
  if (process.env.NODE_ENV === 'development') {
    // do something
  } else {
    bundleCSS = '/static/bundle.css'
    vendorJS = '/static/vendor.js'
  }
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Cool Banana</title>
        <link rel="stylesheet" type="text/css" href=${bundleCSS}>
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
        <script src=${vendorJS}></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">        
      </head>
      <body>
        <div id="root">${`<div>${html}</div>`}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = serverRender
