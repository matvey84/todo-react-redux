import React from "react";
import { useState } from "react";
import ProgressBar from "../progress/ProgressBar";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {nanoid} from 'nanoid'


export const TodoForm =()=>{
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(state => state.addTodoReduser.todos)
  const textInput = useRef()
  const dispatch =useDispatch()
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  function showAlert (){
    if(!inputValue.trim()){
      dispatch({type:'SHOW_ALERT', payload:'Пустое поле ввода!Введите текст!',})
    }
    setTimeout(()=>dispatch({type:'HIDE_ALERT'}), 3000)
  }

  function  submitForm (e){
    e.preventDefault();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDay();

    const todo = {
    content: inputValue,
    id: nanoid(),
    check: false,
    date: `${days[day]}, 0${day}-0${month}-${year}`,
  }
    if(inputValue.trim()){
      dispatch({type:'ADD_TODO', payload:todo,})
    }
      setInputValue('');
      showAlert ()
  }

  const inputFocus =()=>{
    textInput.current.focus()
  }

  function removeAllCheckTodo (){
    const allCheck = todos.filter(checkTodo => !checkTodo.check)
      dispatch({type:'REMOVE_ALL_CHECK_TODO', payload:allCheck})
  }
  return(
    <div className="todo-form">
      <h2>TODOLIST</h2>
      <form className="submit-form"  onSubmit={submitForm}>
        <input
            ref={textInput} 
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="form-control main-input"
            type="text"
            name='mainText'
            placeholder="Add your todo"
        />
        <button 
          onClick = {inputFocus} 
          className="main-btn btn btn-primary"
          type="submit">
            Add TODO
        </button>
      </form>
        <div className="progress-and-remove-block">
            <ProgressBar /> 
          <button 
          onClick={removeAllCheckTodo}
          className="btn btn-info remove-btn">Remove</button>
        </div>
    </div>
  )
}