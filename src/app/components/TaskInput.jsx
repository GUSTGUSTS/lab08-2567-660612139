import React from 'react';

const TaskInput = () => {
  return (
    <div className="description">
      <div className="d-flex gap-1">
        <input
          className="form-control"
          placeholder="Insert a task here.."
        />
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

