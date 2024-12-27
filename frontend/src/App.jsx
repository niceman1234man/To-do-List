import React from 'react'
import AddToDoList from './components/AddToDoList'
import ListOftodoList from './components/ListOftodoList'
import { Route,Routes } from 'react-router-dom'
import UpdateTask from './components/UpdateTask'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={  <AddToDoList/>}/>
    <Route path='/list' element={<ListOftodoList/>}/>
    <Route path='/update-list' element={<UpdateTask/>}/>
    </Routes>
    </>
  )
}

export default App