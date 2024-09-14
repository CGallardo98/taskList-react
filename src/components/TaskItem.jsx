import './TaskItem.css';
import { FiCheck, FiTrash2, FiEdit } from 'react-icons/fi';
import { useState } from 'react';

function TaskItem({task, idx, toggleTaskCompletion, removeTask, editTask}) {

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newCategory, setNewCategory] = useState(task.category);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);

  const onToggleComplete = (i) => {
    toggleTaskCompletion(idx)
  };

  const onEdit = () => {
    if (isEditing) {
      editTask(idx, newName, newCategory, newDueDate);
    }
    setIsEditing(!isEditing);
  };

  const onDelete = () => {
    removeTask(idx)
  };

  return (
    //Display item name and information
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? 
      (
        ////// EDITING MODE //////
        <div className='edit-form'>
          {/* Change name */}
          <input 
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          {/* Category drop down menu */}
          <select 
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Home">Home</option>
          </select>

          {/* Date selection calendar */}
          <input 
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)} 
          />
        </div>
      )
      :
      (
        ////// NON EDITING MODE //////
        <>
          {/* Display item name */}
          <span>{task.name}</span>

          {/* Display item information */}
          <div className='task-info'>

            {/* Creation date */}
            <small>
              Created: {task.creationDate.toLocaleDateString()}
            </small>

            {/* Completion date (if completed) */}
            {task.completedAt && 
              <small>
                Completed: {task.completedAt.toLocaleDateString()}
              </small>
            }
            {/* Category and due date */}
            <small>Category: {task.category}</small>
            <small>Due Date: {task.dueDate}</small>
          </div>
        </>
      )
      }
      {/* Display complete, edit and delete icons*/}
      <div className='icons'>
        <button className='check-btn' onClick={() => onToggleComplete(idx)}>
          <FiCheck size={18}/>
        </button>
        <button className='edit-btn' onClick={onEdit}>
          <FiEdit size={18}/>
        </button>
        <button className='delete-btn' onClick={() => onDelete(idx)}>
          <FiTrash2 size={18}/>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
