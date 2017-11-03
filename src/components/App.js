import React from 'react'
import { connect } from 'react-redux'
import CardTree from './CardTree'

const Cards = connect(state => state)(CardTree)

const App = () =>
  <div className='app'>
    <Cards/>
  </div>

export default App
