
import React from 'react';
import { useSelector } from 'react-redux';
import {nanoid} from 'nanoid'
import './index.css';
import {TodoForm} from './componrnts/todoForm/TodoForm'
import { TodoItem } from './componrnts/todoItem/TodoItem';
import {Alert} from './componrnts/Alert'

function App() {
  const textAlert = useSelector(state => state.alertReduser.alert)
  const todos = useSelector(state => state.addTodoReduser.todos)
  console.log(todos)

 const list = (
  todos.map((todo,i)=>
    <TodoItem 
      key={nanoid()}
      id={i+1}
      todo={todo}
    />
    )
 )
  return (
    <div className='container'>
    <TodoForm/> 
  { todos.length > 0 ?

      <div className="todo-list">
        {list}
      </div>
      :
      <span className='no-todos'>
          No todos!
      </span>
  }
  {textAlert && <Alert text={textAlert}/>}
    </div>
  );
}

export default App;
