import './TaskFilters.css';
import { useState } from 'react';

const TaskFilters = () => {
  const [filterCategories, SetFilterCategories] = useState([])
  const [filterStates, SetFilterStates] = useState([])

  return (
    <div className='task-filters'>
      <select 
        value={filterCategories}
        onChange={(e) => SetFilterCategories(e.target.value)}
        defaultChecked=''>
          Select Categories
          <option value="">All categories</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="School">School</option>
          <option value="Home">Home</option>
      </select>

      <select 
        value={filterStates}
        onChange={(e) => SetFilterStates(e.target.value)}
        defaultChecked=''>
          Select Categories
          <option value="">All states</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
      </select>
    </div>
  )
}

export default TaskFilters