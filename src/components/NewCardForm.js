import React from 'react'
import { makeAddCard } from '../actions'

import initTree from '../resources/initTree'

class NewCardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { type: 'period',
                   mood: 'light',
                   title: '',
                   _light: true
                 }
    this.submit = this.submit.bind(this)
    this.update = this.update.bind(this)
  }

  mood(checked) { if (checked) {
                    return 'light'
                  } else { return 'dark'}
  }

  submit(e) {
    e.preventDefault()
    this.props.dispatch(
      makeAddCard(initTree.id, this.state.type, 
                  this.state.mood, this.state.title))
  }                                              

  update({target: {type, checked, value}}) {
    switch(type) {
      case 'checkbox': 
          this.setState({mood: this.mood(checked), _light: !this.state._light})

      case 'text':
          this.setState({title: value})
    }
  }
                                                 
  render() {
    return (
      <form className='new-card' onSubmit={this.submit}>
        <input type='text'
               placeholder='card title...'
               value={this.state.title} 
               onChange={this.update} />
        <label>{this.state.mood}</label>
        <input type='checkbox'
               checked={this.state._light}
               onChange={this.update} />
        <input type='submit' value='Add Card'/>
      </form>
    )
  }
}

export default NewCardForm
