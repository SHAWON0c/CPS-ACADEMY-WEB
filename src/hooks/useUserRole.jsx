'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useUserRole() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('jwt');
        if (!token) {
          setRole('Not logged in');
          setUsername('');
          setLoading(false);
          return;
        }

        const res = await axios.get(
          'http://localhost:1337/api/users/me?populate=role',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = res.data;
        setUsername(user.username || 'No username');
        setRole(user.role?.name || 'Role not found');
      } catch (err) {
        console.error('❌ Error fetching user:', err);
        setRole('Error fetching role');
        setUsername('');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { role, username, loading };
}
