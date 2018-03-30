import {
  BUILDS,
  ADD_BUILD,
} from '../actions/builds'

const builds =( state = [], action ) => {
  switch (action.type) {
    case BUILDS:
      return action.builds
    default:
      return state
  }
}

export default builds