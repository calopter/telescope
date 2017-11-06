import React from 'react'
import { connect } from 'react-redux'
import { makeRemoveCard } from '../actions'
import CardList from './CardList'
import '../stylesheets/Card.css'

class CardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { childrenVisible: true }
    this.childType=this.childType.bind(this)
  }
  
  childType() {
    return (this.props.type === 'period' ? 'event' : 'scene')
  }
  
  render() {
    const { dispatch, type, title, mood } = this.props
    return (
        <div className='card'>
          <div className={`${type}-card`}
               onClick={() => this.setState({childrenVisible: !this.state.childrenVisible})}> 
            <p className='title'>{title}</p>
            <div className='mood'>{mood.toString()}</div>
            <button onClick={() => dispatch(makeRemoveCard(type, title))}>
              [x]
            </button>
        </div>
       { this.state.childrenVisible ? 
         <div className={`${type}-children-list`}>
            <CardList type={this.childType()} cards={this.props[this.childType()+'s']} />
         </div> : null
       }
       </div>
    )
  }
}
 
const Card = connect()(CardComponent)

export default Card
