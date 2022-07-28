import React,{useState} from 'react'
import "./style.css"

function Form({addTodo}) {

  const [title,setTitle]=useState('')
  const [input,setInput]=useState('')
  
  const handleChange= (event)=>{
    setTitle(event.target.value)
  }

  const onChange= (event)=>{
    setInput(event.target.value)
  }

  const submitTodo =(e)=>{
    e.preventDefault()
    const todo={
      todoTitle:title,
      todoInput:input,
      id:Date.now(),
      isDone:false,
      }
    title!==""&&input!==""? addTodo(todo):alert('입력하세요')
    setTitle('')
    setInput('')
  }
  

  return (
    <form className='todo-form'onSubmit={submitTodo}>
      <div>
        <label htmlFor='title'>제목</label>
        <input onChange={handleChange} id='title'type="text" value={title}/>
        <label htmlFor='text'>내용</label>
        <input onChange={onChange} id='text'type="text" value={input}/>
      </div>
        <div className='todo-button'>
        <button type='submit'>추가하기</button>
      </div>
    </form>
  )
}

export default Form