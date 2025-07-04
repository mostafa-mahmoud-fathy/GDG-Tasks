import React, { useReducer, useEffect, useState, useRef } from 'react';
import './style.css'
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, completed: false }];
    case 'toggle':
      return state.map((task, i) =>
        i === action.index ? { ...task, completed: !task.completed } : task
      );
    case 'delete':
      return state.filter((item, i) => i !== action.index);
    default:
      return state;
  }
}

function init() {
  return JSON.parse(localStorage.getItem('tasks') || '[]');
}

function ToDoList() {
  const [tasks, dispatch] = useReducer(reducer, [], init);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('in-progress');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch({ type: 'add', text: input.trim() });
    setInput('');
    inputRef.current.focus();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'in-progress') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-container">
        <input
          ref={inputRef}
          type="text"
          id="input-field"
          placeholder="Add a new task..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
        />
        <button className="submit-button" onClick={handleAdd}>Add Task</button>
      </div>

      <div className="filter-container">
        <div className="radio-group">
          <input
            type="radio"
            name="filter"
            id="value-1"
            checked={filter === 'in-progress'}
            onChange={() => setFilter('in-progress')}
          />
          <label htmlFor="value-1">In Progress</label>

          <input
            type="radio"
            name="filter"
            id="value-2"
            checked={filter === 'completed'}
            onChange={() => setFilter('completed')}
          />
          <label htmlFor="value-2">Completed</label>

          <input
            type="radio"
            name="filter"
            id="value-3"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          <label htmlFor="value-3">All Tasks</label>
        </div>
      </div>

      <div className="bottom">
        {filteredTasks.map((task, i) => (
          <div key={i} className={`card ${task.completed ? 'completed' : ''}`}>
            <div className="container-checkbox" onClick={() => dispatch({ type: 'toggle', index: i })}>
              <div className="checkmark">
                {task.completed && <div className="checkmark-icon">✔</div>}
              </div>
            </div>
            <div className="task-text">{task.text}</div>
            <button className="delete-button" onClick={() => dispatch({ type: 'delete', index: i })}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
