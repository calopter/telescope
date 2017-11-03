import v4 from 'uuid'
import A from './actionTypes'

const children = (state = [], action) => {
  switch (action.type) {
    case A.ADD_CARD:
      return state.reduce((acc, child) => 
              child.id === action.sibId ? 
                [...acc, child, action.card] : 
                [...acc, child])
    case A.REMOVE_CARD:
      return state.filter(child => child.id !== action.id)
  }
}

const cardTree = (state = {}, action) => {
  switch (action.type) {
    case A.ADD_CARD:
      return state.id === action.parentId ?
        { ...state,
          children: children(state.children, action)
        }
        :
        { ...state,
          children: children.map(child => cardTree(child, action))
        }
    case A.REMOVE_CARD:
      return state.children.map(c => c.id).includes(action.id) ?
              { ...state,
                children: children(state.children, action)
              } 
              :
              { ...state,
                children: children.map(child => cardTree(child, action))
              }
  }
}

//for now we will add to children, later create sibs too
const insert = ({children, id, ...node}, action) => {
  if (id === action.targId) {
    return {
      id: id,
      ...node,
      children: [...children, action.card]
    }
  } else {
    return {
      id: id,
      children: children.map(child => insert(child, action)),
      ...node
    }
  }
}

//for now we just remove all children too
const remove = ({children, id, ...node}, action) => {
  console.log(node)
  if (children.map(c => c.id).includes(action.id)) {
    return {
      children: children.filter(child => child.id !== action.id),
      id: id,
      ...node
    }
  } else {
    return { 
      children: children.map(child => remove(child, action)),
      id: id,
      ...node
    }
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
