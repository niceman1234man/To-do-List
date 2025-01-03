import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTaskAction } from '../action/addTaskAction.js';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/axios.js';

function AddToDoList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialTask = {
        title: '',
        description: '',
    };
    const [task, setTask] = useState(initialTask);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        setError(''); // Clear error on input change
    };

    const handleTask = async (e) => {
        e.preventDefault();
        if (!task.title || !task.description) {
            setError('Both title and description are required!');
            return;
        }

        try {
            const response = await api.post('/create', task);
            console.log(response)
            // dispatch(addTaskAction(response.data.data));   
            setTask(initialTask); // Clear form
            navigate('/list'); // Navigate only after successful submission
        } catch (err) {
            console.error(err);
            setError('Error adding task. Please try again.'); // Set error message
        }
    };

    return (
        <div className="max-w-full">
            <div className="flex flex-col items-center justify-center mx-auto w-[50%]">
                <h1 className="text-2xl p-2">Add New Task</h1>
                {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
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
                        Add Task
                    </button>
                </form>
                <button onClick={() => navigate('/list')} className="mt-2">
                    View list of tasks
                </button>
            </div>
        </div>
    );
}

export default AddToDoList;