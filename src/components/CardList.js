import React from 'react'
import Card from './Card'
import NewCard from './NewCard'
import '../stylesheets/CardList.css'

const CardList = ({parentIndex, type, cards}) => 
  <div className={`${type}-card-list`}>
    { cards.map((card, i) => 
        <div key={i} className={`${type}-card-container`}>
          <Card parentIndex={parentIndex} index={i} type={type} {...card}/>
          <NewCard type={type} index={i+1}/>
        </div>
    )}
  </div>

export default CardList
