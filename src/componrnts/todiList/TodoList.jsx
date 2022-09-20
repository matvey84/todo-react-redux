import React from "react";
import { TodoItem } from "../todoItem/TodoItem";
import {nanoid} from 'nanoid'

export const TodoList=(props)=>{
  return(
    <>
      {
        props.stateTodo.map((todo,i)=>{
            return <TodoItem
            todo={todo}
            id={i+1}
            key={nanoid()}
          />
        })
      }
    </>
  );
}