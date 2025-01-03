import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { api } from '../utils/axios.js';

function UpdateTask() {
  const [task, setTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/getOne/${id}`);
        setTask(response.data.data);
      } catch (error) {
        console.error("Error fetching task:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleTask = async (e) => {
    e.preventDefault();
    if (!task.title || !task.description) {
      alert('Both title and description are required!');
      return;
    }

    try {
      await api.post(`/update/${id}`, task);
      navigate('/list');
    } catch (err) {
      console.error("Error updating task:", err);
      alert('Failed to update task. Please try again.'); // User feedback
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

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
        <button onClick={() => navigate('/list')} className="mt-2">
          View list of tasks
        </button>
      </div>
    </div>
  );
}

export default UpdateTask;