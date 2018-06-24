const initialState = {
  data: null
}

const orgReducer = (state = initialState, action) => {
  if (action.type === 'ORG_CREATED' || action.type === 'ORG_UPDATED')
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }

  return state
}

export default orgReducer
