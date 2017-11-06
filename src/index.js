import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import sampleHistory from './resources/sampleHistory'
import App from './components/App.js'

import { cards } from './actions'

import './stylesheets/index.css'

const store = createStore(cards, sampleHistory)

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
