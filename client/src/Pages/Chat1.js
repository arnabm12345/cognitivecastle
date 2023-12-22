import React from 'react';
//import { ChatEngine } from 'react-chat-engine';

//import ChatFeed from '../Components/ChatFeed';
//import LoginForm from '../Components/LoginForm';
import './App.css';

const projectID = '130033ce-a82a-43cc-a9d5-576352a85074';

const Chat1 = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear local storage and redirect to the login page
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.reload(); // Reload the page or redirect to the login page
  };
  
  const LogoutButton = () => (
    <button
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        marginTop: '1rem',
      }}
      onClick={handleLogout}
    >
      Logout
    </button>
  );

//  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div style={{height:'100vh'}}>
      <LogoutButton />
   {/* <ChatEngine
      height="95vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    //  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  */}
  
    </div>

  );
};

// infinite scroll, logout, more customizations...

export default Chat1;
