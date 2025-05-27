import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data); // Set the user data
            } catch (error) {
                console.error('Error fetching users:', error); // Handle errors
            } finally {
                setLoading(false); // Always stop the loading spinner
            }
        };

        fetchUsers(); // Call the async function
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="App">
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
