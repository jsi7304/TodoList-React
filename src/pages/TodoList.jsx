import React, { useState } from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const doneChange = (id) => {
    const doneList = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(doneList);
  };
  // [{id:0,title:title,isDone:false},{id:1,title:title,isDone:true},{id:2,title:title,isDone:false}]

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(id);
  };

  return (
    <Layout>
      <Header />
      <Form addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} doneChange={doneChange} />
    </Layout>
  );
}

export default TodoList;
