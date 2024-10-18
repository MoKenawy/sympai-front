'use client'

// components/TestAuthToken.tsx
import { getAuthToken } from '@/data-access/chatbotAPI';
import React, { useState } from 'react';

const TestAuthToken: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setError(null); // Reset error state
        try {
            const token = await getAuthToken(username, password);
            setToken(token);
        } catch (err) {
            setError('Error getting token: ' + (err as Error).message);
        }
    };

    return (
        <div>
            <h2>Test Auth Token</h2>
            <input
                key='username'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                key='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Get Auth Token</button>
            {token && <div>Token: {token}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default TestAuthToken;
