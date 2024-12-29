import React from 'react'
import AddToDoList from './components/AddToDoList'
import ListOftodoList from './components/ListOftodoList'
import { Route,Routes } from 'react-router-dom'
import UpdateTask from './components/UpdateTask'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={  <AddToDoList/>}/>
    <Route path='/signin' element={  <Signin/>}/>
    <Route path='/signup' element={  <Signup/>}/>
    <Route path='/list' element={<ListOftodoList/>}/>
    <Route path='/update-list' element={<UpdateTask/>}/>
    </Routes>
    </>
  )
}

export default App