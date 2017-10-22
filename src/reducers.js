import A from './actionTypes'

//for now we will add to children, later create sibs too
const insert = ({children = [], id, ...node}, action) => {
  if (id === action.targId) {
    return {
      ...node,
      children: [...children, action.card]
    }
  } else {
    children.map(child =>
      insert(child, action))
  }
}

const remove = ({children, id, ...node}, action) => {
  if (children.includes(action.card)) {
    return {
      ...node,
      children: children.filter(
        child => child.id !== action.card.id
      )}
  } else {
    children.map(child => remove(child, action))
  }
}

export const cards = (state = {}, action) => {
  switch (action.type) {
    case A.ADD_CARD:
      return insert(state, action)
    case A.REMOVE_CARD:
      return remove(state, action)
    default:
      return state
  }
}
