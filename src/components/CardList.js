import React from 'react'
import Card from './Card'
import NewCard from './NewCard'
import '../stylesheets/CardList.css'

const CardList = ({type, cards}) => 
  <div className={`${type}-card-list`}>
    <NewCard type={type} index={0}/>
    { cards.map((card, i) => 
        <Card key={i} index={i} type={type} {...card}/>
    )}
    <NewCard type={type} index={cards.length-1}/>
  </div>

export default CardList
