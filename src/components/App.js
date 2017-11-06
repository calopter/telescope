import React from 'react'
import { connect } from 'react-redux'
import CardList from './CardList'

const PeriodCards = 
  connect(state => ({ type: 'period',
                      cards: state.periodcards}))(CardList)

const App = () => <div className='app'><PeriodCards/></div>

export default App
