const defaultState={
 alert: null
}
export const alertReduser = (state = defaultState, action) => {
  switch(action.type){
    case 'SHOW_ALERT':
      return {...state,	alert: action.payload}
    case 'HIDE_ALERT':
      return {...state,	alert: null}
    default:
      return state;
  }
}
