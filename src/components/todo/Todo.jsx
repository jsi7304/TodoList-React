import React from 'react'
import "./style.css"

function Todo({todo,removeTodo,doneChange}) {
        
console.log(doneChange)

  
  return (
    <div className='todo-box' id='todo.id' >
      <h1 className='todo-title'>{todo.todoTitle}</h1>
      <p className='todo-comment'>{todo.todoInput}</p>
      <div className='todo-btns'>
        <button onClick={()=>removeTodo(todo.id)}>삭제하기</button>
        <button onClick={()=>doneChange(todo.id)}>{todo.isDone===true? '취소':'완료'}</button>
      </div>
    </div>
  ) 
}

export default Todo