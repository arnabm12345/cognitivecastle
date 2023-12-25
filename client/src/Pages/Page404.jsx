import React from 'react';

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

  return (
    <div style={notFoundStyles}>
      <h1 style={headingStyles}>404</h1>
      <h2>Page not found</h2>
      <p style={messageStyles}>We're sorry, the page you requested could not be found.</p>
    </div>
  );
};
export default NotFound;
