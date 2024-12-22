import React from 'react'
import AddToDoList from './components/AddToDoList'
import ListOftodoList from './components/ListOftodoList'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={  <AddToDoList/>}/>
    <Route path='/list' element={<ListOftodoList/>}/>
    </Routes>
    </>
  )
}

export default App