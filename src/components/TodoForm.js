import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [deadline, setDeadline] = useState("");
    
    
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value, deadline)
        setValue("")
        setDeadline("");
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='what is the task today?' onChange= {(e) => setValue(e.target.value) }/>
            <input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}