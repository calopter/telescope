import React from 'react'
import { connect } from 'react-redux'
import CardTree from './CardTree'
import NewCardForm from './NewCardForm'

const Cards = connect(state => state)(CardTree)
const NewCard = connect()(NewCardForm)

const App = () =>
  <div className='app'>
    <Cards/>
    <NewCard/>
  </div>

export default App
