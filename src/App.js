// src/App.js
import React from 'react';
import ProfileCard from './ProfileCard'; // Import ProfileCard component

function App() {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Personal Profile</h1>
      <ProfileCard 
        name="Fahad" 
        age={30} 
        occupation="Engineer" 
        location="New York" 
      />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
};

export default App;
