import v4 from 'uuid'
import A from './actionTypes'

//for now we will add to children, later create sibs too
const insert = ({children = [], id, ...node}, action) => {
  if (id === action.targId) {
    return {
      id: id,
      ...node,
      children: [...children, action.card]
    }
  } else {
    children.map(child =>
      insert(child, action))
  }
}

//for now we just remove all children too
const remove = ({children, id, ...node}, action) => {
  if (children.map(c => c.id).includes(action.id)) {
    return {
      id: id,
      ...node,
      children: children.filter(
        child => child.id !== action.id
      )}
  } else {
    children.map(child => remove(child, action))
  }
}

export const cards = (state, action) => {
  switch (action.type) {
    case A.ADD_CARD:
      return insert(state, action)
    case A.REMOVE_CARD:
      return remove(state, action)
    default:
      return state
  }
}

export const makeAddCard = (targId, type, mood, title) => {
  return ({ type: A.ADD_CARD,
    targId: targId,
    card: { id: v4(),
            type: type,
            mood: mood,
            title: title,
            children: Array(0)
    }
  })
}

export const makeRemoveCard = id => {
  return ({ type: A.REMOVE_CARD,
            id: id
          })
}
