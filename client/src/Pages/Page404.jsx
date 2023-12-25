import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const NotFound = () => {
  const notFoundStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f8f8',
    color: '#333',
  };

  const headingStyles = {
    fontSize: '5rem',
    marginBottom: '0.5rem',
  };

  const messageStyles = {
    fontSize: '1.5rem',
    margin: '0',
  };
  const buttonStyles = {
    fontSize: '15px',
    textDecoration: 'none', // Remove default link underline
    margin: '10px', // Add margin for spacing
    padding: '10px 20px', // Add padding for the button
    border: '2px solid #333', // Add border
    borderRadius: '5px', // Add border radius for rounded corners
    backgroundColor: '#fff', // Set background color
    color: '#333', // Set text color
    cursor: 'pointer', // Change cursor to pointer on hover
    transition: 'background-color 0.3s, color 0.3s', // Add transition for smooth hover effect
  };

  const buttonHoverStyles = {
    backgroundColor: '#333', // Change background color on hover
    color: '#fff', // Change text color on hover
  };


  return (
    <div style={notFoundStyles}>
      <h1 style={headingStyles}>404</h1>
      <h2>Page not found</h2>
      <p style={messageStyles}>We're sorry, the page you requested could not be found.</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button
          type="button"
          className="btn"
          style={buttonStyles}
         // onMouseEnter={(e) => (e.target.style = { ...buttonStyles, ...buttonHoverStyles })}
          //onMouseLeave={(e) => (e.target.style = buttonStyles)}
        >
          Go to home
        </button>
        </Link>
    </div>
  );
};
export default NotFound;
