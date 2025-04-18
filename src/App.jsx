import Login from './components/Login'
import Register from './components/Register'
import JobPost from './components/JobPost'
import LogoutButton from './components/LogoutButton'
import JobList from './components/JobList'


function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <h2>Job seeker</h2>

      {!token && (
        <>
          <Login />
          <Register />
        </>
      )}
      
      {token && (
        <>
          <JobPost token={token} />
          <LogoutButton />
        </>
      )}
      <JobList />
      
    </>
  )
}

export default App