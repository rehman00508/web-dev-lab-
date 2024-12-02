// src/ProfileCard.js
import React from 'react';

// ProfileCard component receiving props
function ProfileCard({ name, age, occupation, location }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}>Age: {age}</p>
      <p style={styles.info}>Occupation: {occupation}</p>
      <p style={styles.info}>Location: {location}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    margin: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: '1.5em',
    color: '#333',
  },
  info: {
    fontSize: '1em',
    color: '#555',
  },
};

export default ProfileCard;
