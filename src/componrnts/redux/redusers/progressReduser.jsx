const initState={
  width:0,
  step:0,
}
export const progressReduser = (state = initState, action) => {
  switch(action.type){
  case 'CHANGE_STEP':
    return {...state,	step: action.payload}
    default:
    return state;
  }
}