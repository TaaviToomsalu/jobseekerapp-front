import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import JobPost from './components/JobPost'

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <h2>Job seeker</h2>
      <Login />
      <Register />
      <JobPost token={token}/>
      <button onClick={() => {
        localStorage.removeItem("token")
        //window.location.reload()
        console.log("Logged out")
      }}>
        Log out
      </button>
    </>
  )
}

export default App