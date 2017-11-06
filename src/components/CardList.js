import React from 'react'
import Card from './Card'
import '../stylesheets/CardList.css'

const CardList = ({type, cards}) => 
  <div className={`${type}-card-list`}>
    { cards.map((card, i) => 
        <div key={i} className='card-list-element'>
          <Card type={type} {...card}/>
        </div>
    )}
  </div>

export default CardList
