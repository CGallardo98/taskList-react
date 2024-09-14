import './TaskForm.css';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

function TaskForm({addTask}) {
  // Task attributes
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask, category, dueDate);
      setNewTask('');
      setCategory('');
      setDueDate('');
    }
  }

  return (
    // Return a form for adding task name, category and date
    <form className='task-form' onSubmit={handleSubmit}>
      {/*Add task name box (Comment: select text and press shift option A)*/}
      <input 
        type="text"
        placeholder='Add task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} />
      
      {/* Category drop down menu */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Category</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="School">School</option>
        <option value="Home">Home</option>

      </select>

      {/* Date selection calendar */}
      <input 
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)} />
      
      {/* Submit button*/}
      <button type='submit' aria-label='Add task'>
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TaskForm;
