import './TaskList.css';
import TaskItem from './TaskItem';

function TaskList({tasks, toggleTaskCompletion, removeTask, editTask}) {

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <TaskItem
          key = {index}
          task = {task}
          idx = {index}
          toggleTaskCompletion = {toggleTaskCompletion}
          removeTask = {removeTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
