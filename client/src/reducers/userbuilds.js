import {
  USER_BUILDS,
} from '../actions/builds'

const userbuilds =( state = [], action ) => {
  switch (action.type) {
    case USER_BUILDS:
      return action.userbuilds
    default:
      return state
  }
}

export default userbuilds