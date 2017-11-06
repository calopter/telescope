import React from 'react'
import Card from './Card'
import NewCard from './NewCard'
import '../stylesheets/CardList.css'

const CardList = ({type, cards}) => 
  <div className={`${type}-card-list`}>
    { cards.map((card, i) => 
        <div key={i} className={`${type}-card-container`}>
          <Card type={type} {...card}/>
          <NewCard type={type} index={i}/>
        </div>
    )}
  </div>

export default CardList
