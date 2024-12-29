import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../action/userAction.js';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate=useNavigate();
  const dispatch = useDispatch();
  const initailUser = {
    fullname: '',
    email: '',
    password:'',
    confirmPassword:''
  };
  const [user, setUser] = useState(initailUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    if (!user.email || !user.fullname||!user.password) {
      alert('Both title and description are required!');
      return;
    }
    dispatch(registerUser(user)); 
    console.log(user)
    navigate('/list');
    setUser(initailUser); 
  };

  return (
    <div className="max-w-full">
      <div className="flex flex-col items-center justify-center mx-auto w-[50%]">
        <h1 className="text-2xl p-2">Sign Up</h1>
        <form
          className="flex flex-col w-full mx-auto justify-center items-center"
          onSubmit={handleUser}
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="p-2 border w-[70%] m-2"
            value={user.fullname}
            onChange={handleChange}
          />
            <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-2 border w-[70%] m-2"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            className="p-2 border w-[70%] m-2"
            value={user.password}
            onChange={handleChange}
          />
            <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 border w-[70%]"
            value={user.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="p-2 bg-blue-500 m-2 w-[70%] text-white">
           Sign Up
          </button>
        </form>
        <button onClick={()=>navigate('/signin')}>Already have account Login</button>
      </div>
    </div>
  );
}

export default Signup;
