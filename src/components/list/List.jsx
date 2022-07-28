import React from 'react'
import Todo from '../todo/Todo'
import './style.css'

function List({todos,removeTodo, doneChange}) {
console.log(todos)

  return (
    <div className='List'>
      <h1>Working..🔥</h1>
      <div className='todo-listworking'> 
      {todos.map((todo)=>(
        todo.isDone===false?(
          <div className='todo' key={todo.id}>
          <Todo todo={todo} removeTodo={removeTodo} doneChange={doneChange}/>
        </div>
        ):null
      ))}
      </div>
      <h1>Done..! 🎉</h1>
      <div className='todo-listDone'> 
      {todos.map((todo)=>(
        todo.isDone===true?(
          <div className='todo' key={todo.id}>
          <Todo todo={todo} removeTodo={removeTodo} doneChange={doneChange}/>
        </div>
        ):null
      ))}
      </div>
    </div>
  )
}

export default List