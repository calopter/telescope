import React from 'react'
import { createStore } from 'redux'
import { v4 } from 'uuid'
import { cards } from '../reducers'
import A from '../actionTypes'
import CardTree from './CardTree.js'
import initTree from '../resources/initTree.json'
import '../stylesheets/App.css'

const store = createStore(cards, initTree)

console.log(store.getState())

const newCard = {
  id: v4(),
  type: 'period',
  mood: 'dark',
  name: 'newkid',
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

store.dispatch(removeCardAction)
console.log(store.getState())

const App = () =>
    <div className="app">
        <CardTree {...initTree} />
    </div>

export default App
