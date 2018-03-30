import axios from 'axios'

export const BUILDS = 'BUILDS'
export const ADD_BUILD = 'ADD_BUILD'

export const getBuilds = () => {
  return (dispatch) => {
    axios.get('api/builds')
         .then( res => {
            dispatch({ type: BUILDS, builds: res.data })
            dispatch({ type: 'HEADERS', headers: res.headers })
         })
  }
}