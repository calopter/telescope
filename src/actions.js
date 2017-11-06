import A from './actionTypes'

const insert = (state, action) => {
  return [...state.slice(0, action.index),
          action.card,
          ...state.slice(action.index)
         ]
}

const remove = (state, action) => 
  state.filter(card => card.title !== action.title)

const updateByIndex = (state, action, index, reducer) => {
  return [...state.slice(0, index),
          reducer(state[index], action),
          ...state.slice(index+1)
         ]
}

const events = (state, action) => {
  switch (action.type) {
    case A.ADD_EVENT:
      return {...state, events: insert(state.events, action)}
    case A.REMOVE_EVENT:
      return {...state, events: remove(state.events, action)}
    default:
      return state
  }
}

export const cards = (state, action) => {
  switch (action.type) {
    case A.ADD_PERIOD:
      return {...state, periodcards: insert(state.periodcards, action)}
    case A.REMOVE_PERIOD:
      return {...state, periodcards: remove(state.periodcards, action)}
    case A.ADD_EVENT:
      return {...state, periodcards: updateByIndex(state.periodcards, action, action.parentIndex, events)}
    case A.REMOVE_EVENT:
      return {...state, periodcards: updateByIndex(state.periodcards, action, action.parentIndex, events)}
      //shouldn't test for add/remove here and in events()
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

export const makeAddCard = (type, title, mood, parentIndex, index) => {
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
               parentIndex: parentIndex,
               card: { title: title,
                       mood: mood,
                       scenes: Array(0) }})
    default:
      return null
  }
}

export const makeRemoveCard = (type, title, parentIndex, index) => {
  switch (type) {
    case 'period':
      return({type: A.REMOVE_PERIOD, title: title})
    case 'event':
      const a = ({type: A.REMOVE_EVENT, title: title, parentIndex: parentIndex})
      console.log(a)
      return a
    default:
      return null
  }
}
