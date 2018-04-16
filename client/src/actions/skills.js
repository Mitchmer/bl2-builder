

// export const decreaseSkill = (char, skill) => {
//   switch (char) {
//     case 'maya':
//       mayaSkill(skill, '-')
//       break
//     default: break
//   }  
// }

export const mayaSkill = (skill, modifier) => {

  return (dispatch) => {
    switch (skill) {
      case 'ward':
        modifier === '+' ?
          dispatch({ type: 'INCREASE_WARD', maya: {...maya} })
        :
          dispatch({ type: 'DECREASE_WARD', maya })
        break
      default: break
    }
  } 
}