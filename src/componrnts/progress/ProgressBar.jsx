import React, { useEffect } from "react";
import './progressStyle.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ProgressBar () {
  const todos = useSelector(state=> state.addTodoReduser.todos)
  const doneTodo = useSelector(state => state.addTodoReduser.done)
  const dispatch = useDispatch()
 
const styles= {
  progressBar: {
    width:'200px',
  },
  progressScale: {
    visibility:'hidden',
  },
}

  useEffect(()=>{
    dispatch({type:'DONE_TODO', payload:todos.filter(checkTodo => checkTodo.check===true)})
  },[dispatch, todos])
  
 let step = (parseInt(styles.progressBar.width)/todos.length)*doneTodo.length

  if(todos.length === 0 && doneTodo.length === 0){
    styles.progressScale = 'hidden'
  } else { 
    styles.progressScale = 'visible'
  }
 
  function scale(step = 0){
   let widthCount = 0;
  return widthCount = (widthCount+step)
  }
    let width = scale(step)
  
  return(
  <div className="progress-block">
    <div className="done-todo">
      <span className="done-text"> Done:{doneTodo.length} </span>
    </div>
      <div style={styles.progressBar}className="progress-bar">
        <div className = "progress-scale" 
          style={{
            width:`${width}px`,
            visibility:`${styles.progressScale}`
        }}>
        </div>
      </div>
    <div className="total-todo">
      <span className="total-text"> Total:{todos.length} </span>
    </div>
  </div>
  )
}