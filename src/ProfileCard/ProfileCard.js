// src/ProfileCard/ProfileCard.js
import React from 'react';
import './ProfileCard.css'; // Importing the CSS for styling

const ProfileCard = ({ name, age, occupation, location, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <img src={imageUrl} alt={name} className="profile-avatar" />
        <h2 className="profile-name">{name}</h2>
        <p className="profile-detail"><strong>Age:</strong> {age}</p>
        <p className="profile-detail"><strong>Occupation:</strong> {occupation}</p>
        <p className="profile-detail"><strong>Location:</strong> {location}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
