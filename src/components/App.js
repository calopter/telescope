import React from 'react'
import { connect } from 'react-redux'
import CardList from './CardList'

const PeriodCards = 
  connect(state => ({ type: 'period',
                      cards: state.periodcards}))(CardList)

const App = () => <PeriodCards/>

export default App
