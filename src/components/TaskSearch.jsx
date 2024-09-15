import './TaskSearch.css';

function TaskSearch({ setSearchQuery }) {
  return (
    <div className="task-search">
      <input 
        type="text"
        placeholder='Search tasks...'
        value={setSearchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
         />
    </div>
  );
}

export default TaskSearch;
