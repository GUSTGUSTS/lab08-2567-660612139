import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="card">
      <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.text}
        </span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};
