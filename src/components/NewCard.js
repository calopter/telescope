import React from 'react'
import { connect } from 'react-redux'
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
    console.log(this)
  }

  mood(checked) { if (checked) {
                    return 'light'
                  } else { return 'dark'}
  }

  submit(e) {
    const { dispatch, targId, onAdd } = this.props
    const { type, mood, title } = this.state
    e.preventDefault()
    const action = makeAddCard(targId, type, mood, title)
    console.log(action)
    dispatch(action)
    onAdd()
  }                                              

  update({target: {type, checked, value}}) {
    switch(type) {
      case 'checkbox': 
          this.setState({ mood: this.mood(checked), 
                         _light: !this.state._light})

      case 'text':
          this.setState({title: value})
    }
  }
                                                 
  render() {
    const { submit, update, state: {title, mood, _light}} = this
    return (
      <form className='new-card' onSubmit={submit}>
        <input type='text'
               placeholder='card title...'
               value={title} 
               onChange={update} />
        <label>{mood}</label>
        <input type='checkbox'
               checked={_light}
               onChange={update} />
        <input type='submit' value='Add Card'/>
      </form>
    )
  }
}

const NewCard = connect()(NewCardForm)

export default NewCard
