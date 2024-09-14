import './index.css';
import Header from './components/Header';
import TaskFilters from './components/TaskFilters';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add task to tasks array
  const addTask = (taskText, category, dueDate) => {
    const addedTask = {
      name: taskText,
      creationDate: new Date(),
      completed: false,
      category,
      dueDate,
      completedAt: null
    };
    setTasks([...tasks, addedTask])
  }

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => 
      (
      index === i ? {...task, 
                    completed: !task.completed, 
                    completedAt: task.completed ? null : new Date()
                    } : task
      )));
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newName, newCategory, newDueDate) => {
    setTasks(tasks.map((task, i) => (
      index === i ? {...task,
                    name: newName,
                    category: newCategory,
                    dueDate: newDueDate
                    } : task
    )))
  }

  return (
    <div className="app-container">
      <Header/>
      <TaskForm addTask={addTask}/>
      <TaskList 
        tasks={tasks}
        toggleTaskCompletion = {toggleTaskCompletion}
        removeTask={removeTask}
        editTask={editTask}
      />
      
    </div>
  );
}

export default App;
