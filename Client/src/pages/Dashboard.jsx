import React, { useState } from 'react'
import Inputbox from '../components/Inputbox'

const Dashboard = () => {
  let [todos,settodos] =useState();
  return (
    <>
      <Inputbox />
      {
        todos.length===0?<div><h2>No records</h2></div>:todos.map(todo=>{
          <div><h2>{todo.work}</h2></div>
        })
      }
    </>
  )
}

export default Dashboard