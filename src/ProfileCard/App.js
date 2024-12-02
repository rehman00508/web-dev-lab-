// src/ProfileCard/App.js
import React from 'react';
import ProfileCard from './ProfileCard'; // Import ProfileCard component

const App = () => {
  return (
    <div className="app">
      <ProfileCard
        name="Abdul Rehman"
        age={30}
        occupation="WEB Technoligy"
        location="GU TECH"
        imageUrl="https://www.w3schools.com/w3images/avatar2.png" // Placeholder image URL
      />
    </div>
  );
};

export default App;
