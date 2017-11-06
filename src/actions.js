import A from './actionTypes'

const insert = (state, action) => {
  return [...state.slice(0, action.index),
          action.card,
          ...state.slice(action.index)
         ]
}

const remove = (state, action) => {
  return state.filter(card => card.title !== action.title)
}

export const cards = (state, action) => {
  switch (action.type) {
    case A.ADD_PERIOD:
      return {...state, periodcards: insert(state.periodcards, action)}
    case A.REMOVE_PERIOD:
      return {...state, periodcards: remove(state.periodcards, action)}
    case A.ADD_EVENT:
      return state
      //return insert(state.periodcards[action.index].events, action)
    case A.REMOVE_EVENT:
      return state
      //return remove(state.periodcards[action.index].events, action)
    case A.ADD_SCENE: 
      //figure out how to best walk state to relevant period->event->scenes array
      //then call to insert/remove with that
      return state
    case A.REMOVE_SCENE:
      return state
    default:
      return state
  }
}

export const makeAddCard = (type, index, title, mood) => {
  switch (type) {
    case 'period':
      return ({ type: A.ADD_PERIOD,
                index: index,
                card: { title: title,
                        mood: mood,
                        events: Array(0) }})
    case 'event':
      return({ type: A.ADD_EVENT,
               index: index,
               card: { title: title,
                       mood: mood,
                       scenes: Array(0) }})
    default:
      return null
  }
}

export const makeRemoveCard = (type, title) => {
  switch (type) {
    case 'period':
      return({type: A.REMOVE_PERIOD, title: title})
    case 'event':
      return({type: A.REMOVE_EVENT, title: title})
    default:
      return null
  }
}
