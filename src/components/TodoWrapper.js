import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm';
uuidv4();


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo, deadline) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false, isEditingDeadline: false, deadline}])
        console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }

    const startEditingDeadline = (id) => {setTodos(todos.map((todo) =>todo.id === id ? { ...todo, isEditingDeadline: true } : todo));
    }
    
      const handleDeadlineChange = (id, newDeadline) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, deadline: newDeadline } : todo));
    }

      const saveDeadline = (id) => {setTodos(todos.map((todo) =>todo.id === id ? { ...todo, isEditingDeadline: false } : todo));
    }

    


    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) : (
                <Todo task ={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} startEditingDeadline={startEditingDeadline}
                handleDeadlineChange={handleDeadlineChange} saveDeadline={saveDeadline}/>
            )))}
            
        </div>
    )
}