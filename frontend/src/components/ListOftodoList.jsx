import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { api } from "../utils/axios.js";
// import { getTaskAction } from '../action/addTaskAction.js';

function ListOftodoList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const tasks = useSelector(state => state.text); // Adjusting selector

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/");

        setTasks(response.data.data);

        // dispatch(getTaskAction(response.data.data)); // Assuming response.data.data contains the array of tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
     const delte= window.confirm('Are you want to delete this task ?')
     if(delte){
      await api.delete(`/delete/${id}`).then(()=>{
        tasks.filter((task)=>task._id != id);
      }).catch(err=>console.log(err));
      
     }
      
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-[1240px] flex flex-col justify-center mx-auto">
        <h1 className="text-2xl text-center font-bold">List of Tasks</h1>
        <button onClick={() => navigate(-1)}>
          <TiArrowBack size={50} />
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((item) => (
            <div className="bg-green-300 w-full p-4 m-2" key={item._id}>
              <li>
                <h1 className="text-xl font-bold text-center">{item.title}</h1>
                <p className="text-wrap">{item.description}</p>
                 <div className="flex mt-8">
                 <p className="mr-6">
                  <Link to={`/update-list/${item._id}`}>
                  
                    <CiEdit size={30} />
                  </Link>
                </p>

                <button onClick={() => handleDelete(item._id)}>
                  <MdDeleteForever size={30} />
                </button>
                 </div>
                
                <p className="pt-2 text-[10px]">
                  Created At {new Date(item.createdAt).toLocaleString()}
                </p>
                <p className="text-[10px]">
                  Updated At {new Date(item.updatedAt).toLocaleString()}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListOftodoList;
