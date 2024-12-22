import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../action/addTaskAction.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UpdateTask() {
    const oldtask=useSelector(state=>state.text)
    const navigate=useNavigate();
  const dispatch = useDispatch();

  const initailtask = {
    title: oldtask.title,
    description: oldtask.description,
  };
  const [task, setTask] = useState(initailtask);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleTask = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) {
      alert('Both title and description are required!');
      return;
    }
    dispatch(addTaskAction(task)); 
    navigate('/list');
    setTask(initailtask); 
  };

  return (
    <div className="max-w-full">
      <div className="flex flex-col items-center justify-center mx-auto w-[50%]">
        <h1 className="text-2xl p-2">Update Task</h1>
        <form
          className="flex flex-col w-full mx-auto justify-center items-center"
          onSubmit={handleTask}
        >
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="p-2 border w-[70%] m-2"
            value={task.title}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Task Description"
            className="p-2 border w-[70%]"
            value={task.description}
            onChange={handleChange}
          />
          <button type="submit" className="p-2 bg-blue-500 m-2 w-[50%] text-white">
            Update Task
          </button>
        </form>
        <button onClick={()=>navigate('/list')}>View list of tasks</button>
      </div>
    </div>
  );
}

export default UpdateTask;
