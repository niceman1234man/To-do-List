import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate,Link } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
import { api } from '../utils/axios.js';
import { getTaskAction } from '../action/addTaskAction.js';
function ListOftodoList() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const task = useSelector(state => state.text);
   // Adjust the path if using combined 
   useEffect(()=>{
    api.get('/').then((task)=>{
     dispatch(getTaskAction(task));
    }).catch(err=>console.log(err));
   },[])
  const handleDelete=(id)=>{
    api.delete(`/delete/${id}`)
    .then(task=>console.log(task))
    .catch(err=>console.log(err));
  }
  return (
    <div className='p-8'>
      <div className='max-w-[1240px] flex flex-col justify-center mx-auto'>
      <h1 className='text-2xl text-center font-bold'>List of Tasks</h1>
      <button onClick={()=>navigate(-1)}><TiArrowBack size={50}/></button>
      <ul>
      <div className='grid grid-cols-3 gap-8'>
       {task.map((item,index)=>(
        <div className='bg-green-300 w-full p-2 m-2'>
        <li key={item.data._id}>
            <h1 className='text-xl font-bold text-center'>
            {item.data.title}
            </h1>
            <p className='text-wrap'>{item.data.description}</p>
            <p className='p-2'>Created At {new Date(item.data.createdAt).toLocaleString()}</p>
            <p className='p-2'>Updated At {new Date(item.data.updatedAt).toLocaleString()}</p>
            <button className='m-2'><CiEdit size={30} /><Link to={`/update-list/${item.data._id}`}></Link></button>
            <button onClick={handleDelete}><MdDeleteForever size={30}/></button>
        </li>
        </div>
       ))}
       </div>
      </ul>
      </div>
    </div>
  );
}

export default ListOftodoList;
