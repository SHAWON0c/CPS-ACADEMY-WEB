'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserRolePage() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Get JWT from localStorage
        const token = localStorage.getItem('jwt');
        if (!token) {
          setRole('Not logged in');
          setUsername('');
          setLoading(false);
          return;
        }

        // Call Strapi /users/me with role populated
        const res = await axios.get('http://localhost:1337/api/users/me?populate=role', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = res.data; // Strapi response may vary
        setUsername(user.username || 'No username');
        setRole(user.role?.name || 'Role not found');
      } catch (err) {
        console.error('Error fetching user:', err);
        setRole('Error fetching role');
        setUsername('');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white text-xl gap-2">
      <div>Username: {username}</div>
      <div>User Role: {role}</div>
    </div>
  );
}
