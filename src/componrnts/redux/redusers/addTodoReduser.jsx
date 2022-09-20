const initState={
  todos:[],
  check:false,
  done:[]
}

function changeTodo (state, changeTodo){
  const newObject = state.todos.map((todo,i) => 
   state.todos[i].id === changeTodo.id ? {...todo, todos: state.todos[i].content=changeTodo.content} : todo
  )
  return {...state, newObject}
}

export const addTodoReduser = (state = initState, action) => {
  switch(action.type){	
    case 'ADD_TODO':
      return {...state,	todos: [...state.todos, action.payload] }
    case 'DELETE_TODO':
      return {...state,	todos:[...action.payload] }
    case 'REMOVE_ALL_CHECK_TODO':
        return {...state,	todos:[...action.payload] }
    case 'TOGGLE_CHECK':
      return {...state,	check: action.payload }
    case 'ADD_CHANGE_CONTENT':
      return changeTodo (state, action.payload)
    case 'DONE_TODO':
      return {...state,	done:[...action.payload] }
    default:
      return state
  }
}