import React from 'react'
import { connect } from 'react-redux'
import { makeAddCard } from '../actions'
import '../stylesheets/NewCard.css'

class NewCardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '',
                   mood: true, 
                   visible: false }
    this.submit = this.submit.bind(this)
    this.update = this.update.bind(this)
  }

  submit(e) {
    const { dispatch, type, index } = this.props
    const { mood, title } = this.state
    e.preventDefault()
    const action = makeAddCard(type, index, title, mood)
    console.log(action)
    dispatch(action)
    this.setState({visible: false})
  }                                              

  update({target: {type, checked, value}}) {
    switch(type) {
      case 'checkbox': 
          this.setState({mood: checked})
          break
      case 'text':
          this.setState({title: value})
          break
      default:
          break
    }
  }
                                                 
  render() {
    const { submit, update, state: {title, mood, visible}} = this
    const form = (
      <form className='new-card' onSubmit={submit}>
        <input type='text'
               placeholder='card title...'
               value={title} 
               onChange={update} />
        <label>{mood.toString()}</label>
        <input type='checkbox'
               checked={mood}
               onChange={update} />
        <input type='submit' value='Add Card'/>
        <button onClick={() => this.setState({visible: false})}>
          x
        </button>
      </form>
    )
    return (
      visible ? form : 
      <div className='add-card' 
           onClick={() => this.setState({visible: true})}>
      add</div>
    )
  }
}

const NewCard = connect()(NewCardForm)

export default NewCard
