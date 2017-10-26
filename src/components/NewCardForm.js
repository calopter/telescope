import React from 'react'
import { cards } from '../actions'

let NewCardForm = ({ dispatch }) => {
  let _type, _title, _mood

  const submit = e => {
        e.preventDefault()
        dispatch(_type.value, _title.value, _mood.value)
        _type.value = 'period-card'
        _title.value = ''
        _mood.value = 'light'
  }

  return (
    <form className='new-card' onSubmit={submit}>
      <input ref={input => _title = input}
             type='text'
             placeholder='card title...' required/>
      <input ref={input => _mood = input}
             type = 'radio' />
      <button type='submit'>Add Card</button>
    </form>
  )
}

export default NewCardForm
