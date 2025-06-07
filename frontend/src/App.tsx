import { useEffect, useState } from 'react'
import './App.css'
import type { Todo } from './types';
import { AddTodo } from './components/add-todo';
import { TodoCard } from './components/todo-card';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos");

      if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.status}`);
      }

      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };


  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className='h-full w-full grid gap-4'>
      <h1 className='flex items-center justify-center text-3xl font-bold'>
        To do App Canary Mail
      </h1>
      {todos.length !== 0 && (
        <>
          <div className="px-4">
            <AddTodo onAdd={getTodos} />
          </div>
          <div className='p-4 flex flex-col gap-4'>
            {
              todos.map((todo) => (
                <TodoCard todo={todo} getTodos={getTodos} key={todo.id} />
              ))
            }
          </div>
        </>
      )}

      {
        todos.length === 0 && (
          <div className='flex flex-col items-center justify-center gap-4'>
            <div>
              No Todos Found
            </div>
            <div className="px-4">
              <AddTodo onAdd={getTodos} />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
