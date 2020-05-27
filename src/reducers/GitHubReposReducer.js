import { GET_GITHUB_API } from '../actions/actionTypes'

const initialState = {
  repos: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_API:
      return {
        ...state,
        repos: action.payload,
      }

    default:
      return state
  }
}
