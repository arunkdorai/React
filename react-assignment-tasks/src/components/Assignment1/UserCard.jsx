import React from 'react';
import './UserCard.css';

const UserCard = ({ users }) => {
  return (
    <div className="user-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-detail">{`Email: ${user.email}`}</p>
          <p className="user-detail">{`Role: ${user.role}`}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCard;