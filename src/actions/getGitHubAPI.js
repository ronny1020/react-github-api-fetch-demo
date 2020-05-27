import { GET_GITHUB_API } from './actionTypes'

export const getProduct = (id) => {
  return async (dispatch) => {
    const url = `https://api.github.com/users/${id}/repos`
    const response = await fetch(url)
    const repos = await response.json()
    dispatch({
      type: GET_GITHUB_API,
      payload: repos,
    })
  }
}
