import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo, startEditingDeadline, handleDeadlineChange, saveDeadline, isUrgent}) => {
    
    
    return (
        <div className={`Todo ${isUrgent(task.deadline) ? "urgent-task" : ""}`}>
               
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`} >{task.task}</p>
            
            {task.isEditingDeadline ? (
        <input
          type="datetime-local"
          value={task.deadline || ""}
          onChange={(e) => handleDeadlineChange(task.id, e.target.value)}
          onBlur={() => saveDeadline(task.id)}
          className="edit-deadline"
        />
      ) : (
        <p onClick={() => startEditingDeadline(task.id)} className="deadline-text">
          Deadline: {task.deadline ? new Date(task.deadline).toLocaleString() : "Click to add"}
        </p>
      )}
      
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}