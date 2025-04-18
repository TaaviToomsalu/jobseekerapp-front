const LogoutButton = () => {
    const handleLogout = () => {
      localStorage.removeItem("token");
      console.log("Logged out");
      window.location.reload(); // Optional: triggers rerender
    };
  
    return (
      <button onClick={handleLogout}>
        Log out
      </button>
    );
  };
  
  export default LogoutButton;