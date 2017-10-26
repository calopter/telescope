import React from 'react'
import { makeAddCard } from '../actions'

import initTree from '../resources/initTree'

let NewCardForm = ({ dispatch }) => {
  let _type, _title, _mood

  const submit = e => {
        e.preventDefault()
        dispatch(makeAddCard(initTree.id, _type.value, _mood.value, _title.value))
        _type.value = 'period'
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
