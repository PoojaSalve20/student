import React, { useEffect, useState } from 'react';


const GridView = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // State for storing selected user
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTileClick = (user) => {
    setSelectedUser(user); // Set the selected user
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedUser(null); // Clear the selected user
  };

  return (
    <div className="grid-view">
      {users.map((user) => (
        <div className="grid-item" key={user.id} onClick={() => handleTileClick(user)}>
          <div className="grid-item-content">
            <h3>{user.name}</h3>
            <span><b>Email:</b> {user.email}</span>
            <span><b>Company:</b> {user.company.name}</span>
            <div className="tile-options">
              <button className="options-button">⋮</button>
              <div className="options-menu">
                <button>Edit</button>
                <button>Flag</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <h3>{selectedUser.name}</h3>
            <span><b>Username:</b> {selectedUser.username}</span>
            <span><b>Email:</b> {selectedUser.email}</span>
            <span><b>Phone:</b> {selectedUser.phone}</span>
            <span><b>Website:</b> <a href={`http://${selectedUser.website}`} target="_blank" rel="noopener noreferrer">{selectedUser.website}</a></span>
            <span><b>Company:</b> {selectedUser.company.name}</span>
            <span><b>Address:</b> {selectedUser.address.street}, {selectedUser.address.city}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridView;
