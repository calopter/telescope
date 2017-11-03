import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import initTree from './resources/initTree'
import { cards, makeAddCard, makeRemoveCard } from './actions'

import './stylesheets/index.css'

const store = createStore(cards, initTree)

const rootId = initTree.id
const childId = initTree.children[0].id
console.log(childId)

//store.dispatch(makeAddCard(rootId, 'period', 'dark', 'newkidd'))
//console.log(store.getState())
//store.dispatch(makeAddCard(childId, 'period', 'dark', 'another'))

//const removeCardAction = makeRemoveCard(newCardAction.card.id)
//store.dispatch(removeCardAction)
//console.log(store.getState())

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
