import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import initTree from './resources/initTree.json'
import { cards, makeAddCard, makeRemoveCard } from './actions'

import './stylesheets/index.css'

const store = createStore(cards, initTree)

console.log(store.getState())

const rootId = "7d8d8aa9-8dbf-4f83-b576-43c89d77d8b4"
const newCardAction = makeAddCard(rootId, 'period-card', 'dark', 'newkidd')

store.dispatch(newCardAction)
console.log(store.getState())

const removeCardAction = makeRemoveCard(newCardAction.card.id)

//store.dispatch(removeCardAction)
//console.log(store.getState())

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
