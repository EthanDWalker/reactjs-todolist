import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  function persist(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function addTodo(value) {
    const newTodos = [...todos, value]
    persist(newTodos)
    setTodos(newTodos)
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persist(newTodos)
    setTodos(newTodos)
  }

  function editTodo(index, value) {
    const newTodos = todos.map((todo, todoIndex) => {
      return todoIndex === index ? value : todo
    })
    persist(newTodos)
    setTodos(newTodos)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <main className='px-2 py-2 min-w-screen min-h-screen flex flex-col'>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App
