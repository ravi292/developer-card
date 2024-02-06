import { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/todos')
            const data = await response.json();
            return data;
        }
        fetchData()
         .then((t) => {setTodos(t.todos)})
    }, [setTodos])
        
    async function handleAddtion(title, description) {
        console.log(title)
        const payload = JSON.stringify({ title, description })
        console.log(payload)
        await fetch('http://localhost:3000/todo', {
            method: 'post',
            body: payload,
            headers: { "Content-type":  "application/json"}
        })
        alert('Todo added')
    }

    async function handleUpadte(id) {
        await fetch('http://localhost:3000/completed', {
            method: 'put',
            body: JSON.stringify({ id: id }),
            headers: { 'Content-type' : 'application/json'}
        })
        alert('Todo Updated')
    }

  return (
    <>
      <h1>Todo</h1>
      <CreateTodo handleAddition={handleAddtion}/>
      <Todos todos={todos} handleUpdate={handleUpadte}/>
    </>
  )
}

export default App
