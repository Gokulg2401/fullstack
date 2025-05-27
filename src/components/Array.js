import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  // Simulate fetching data with useEffect
  useEffect(() => {
    const fakeUsers = [
      { id: 1, name: 'Gokul' },
      { id: 2, name: 'Ramya' },
      { id: 3, name: 'Arun' },
      {id:4,name:'Gayathri'},
    ];

    // Simulate a delay like an API call
    setTimeout(() => {
      setUsers(fakeUsers);
    }, 2000);
  }, []); // Empty dependency array = run only once on mount

  return (
    <div class='array'>
      <h2>Users Listt</h2>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
