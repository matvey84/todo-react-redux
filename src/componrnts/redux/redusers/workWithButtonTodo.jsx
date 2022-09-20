const defaultState={
  check:false,
}

export const workWithButtonTodo = (state = defaultState, action)=>{
  switch(action.type){
  case 'CHECK':
    return {...state,	check: action.payload? true:false/*true*/}
  case 'UNCHECK':
    return {...state,	check:false}
    default:
    return state;
  }
}
