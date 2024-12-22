import React from 'react';
import { useSelector } from 'react-redux';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
function ListOftodoList() {
    const navigate=useNavigate();
  const task = useSelector(state => state.text); // Adjust the path if using combined reducers

  return (
    <div className='p-8'>
      <div className='max-w-[1240px] flex flex-col justify-center mx-auto'>
      <h1 className='text-2xl text-center font-bold'>List of Tasks</h1>
      <button onClick={()=>navigate(-1)}><TiArrowBack size={50}/></button>
      <ul>
      <div className='grid grid-cols-3 gap-8'>
       {task.map((item,index)=>(
        <div className='bg-green-300 w-full p-2 m-2'>
        <li key={index}>
            <h1 className='text-xl font-bold text-center'>
            {item.title}
            </h1>
            <p className='text-wrap'>{item.description}</p>
            <p className='p-2'>{new Date().toLocaleString()}</p>
            <button className='m-2'><CiEdit size={30}/></button>
            <button><MdDeleteForever size={30}/></button>
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
