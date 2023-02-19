import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== '') {
      setTasks([...tasks, {text: inputValue, completed: false}]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleCompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = {...newTasks[index], completed: !newTasks[index].completed};
    setTasks(newTasks);
  };

  return (

    <div className="container">
      <h1 className="title">Todo App</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Add a task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="plus-button" onClick={handleAddTask}>
          +
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(index)}
                />
                {/* <span className="checkbox-custom"></span> */}
                <span className="task-text">{task.text}</span>
              </label>
              <div className="task-buttons">

                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(index)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default App;
