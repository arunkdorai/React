import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EnhancedCounter.css';

const EnhancedCounter = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count || 1}`);
        setUserData(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [count]);

  return (
    <div className="enhanced-counter">
      <div className="counter-section">
        <h2 className="count-display">{count}</h2>
        <div className="button-group">
          <button 
            onClick={() => setCount(prev => Math.max(0, prev - 1))}
            className="counter-button decrease"
          >
            Decrease
          </button>
          <button 
            onClick={() => setCount(prev => Math.min(10, prev + 1))}
            className="counter-button increase"
          >
            Increase
          </button>
        </div>
      </div>

      <div className="user-info-section">
        {loading && <p className="status-message loading">Loading...</p>}
        {error && <p className="status-message error">{error}</p>}
        {userData && !loading && !error && (
          <div className="user-info">
            <h3 className="user-name">{userData.name}</h3>
            <p className="user-detail">Email: {userData.email}</p>
            <p className="user-detail">Phone: {userData.phone}</p>
            <p className="user-detail">Website: {userData.website}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedCounter;