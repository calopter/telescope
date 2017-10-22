import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import { v4 } from 'uuid'

import App from './components/App'
import initTree from './resources/initTree.json'
import { cards } from './reducers'
import A from './actionTypes'

import './stylesheets/index.css'

const store = createStore(cards, initTree)

console.log(store.getState())

const newCard = {
  id: v4(),
  type: 'period-card',
  mood: 'dark',
  title: 'newkid',
  children: Array(0)
}

const newCardAction = {
  type: A.ADD_CARD,
  targId: "7d8d8aa9-8dbf-4f83-b576-43c89d77d8b4",
  card: newCard
}

store.dispatch(newCardAction)
console.log(store.getState())

const removeCardAction = {
  type: A.REMOVE_CARD,
  card: newCard
}

//store.dispatch(removeCardAction)
//console.log(store.getState())

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()
