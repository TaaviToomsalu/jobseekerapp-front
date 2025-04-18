import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import JobPost from './components/JobPost'
import LogoutButton from './components/LogoutButton'
import JobList from './components/JobList'


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <h2>Job seeker</h2>
      <nav style={{ marginBottom: '1rem' }}>
        {!token && (
          <>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/register">Register</Link>
          </>
        )}
        {token && (
          <>
            <Link to="/post-job">Post Job</Link> |{" "}
            <Link to="/logout">Logout</Link>
          </>
        )}
        {" | "}
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<JobList />} />

        {!token && (
          <>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {token && (
          <>
            <Route path="/post-job" element={<JobPost token={token} />} />
            <Route path="/logout" element={<LogoutButton setToken={setToken} />} />
          </>
        )}

        {/* Catch-all route to redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


    </>
  )
}

export default App