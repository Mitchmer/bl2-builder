import axios from 'axios'

export const BUILDS = 'BUILDS'
export const USER_BUILDS = 'USER_BUILDS'
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

export const getUserBuilds = (id) => {
  //axios request to custom route
  return (dispatch) => {
    axios.get(`api/users/${id}/builds`)
        .then( res => {
          dispatch({ type: USER_BUILDS, userbuilds: res.data })
          dispatch({ type: 'HEADERS', headers: res.headers })
        })
  }
}

// export const addBuild = () => {
//   reutrn (dispatch) => {
//     axios.post('api/builds/')
//   }
// }