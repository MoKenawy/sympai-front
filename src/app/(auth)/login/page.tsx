// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken } from '@/data-access/chatbotAPI';

const LoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); // Disable button and show loading state
        setErrorMessage(''); // Reset any previous error messages
        console.log('Login:', username, password)
        try {
            const token = await getAuthToken(username, password);
            // Store the token in local storage or cookies
            localStorage.setItem('token', token);
            // Optionally, redirect or perform additional actions after login
            router.push('/'); // Redirect to the homepage or another page after successful login
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Login failed. Please check your credentials.'); // Show error message
        } finally {
            setIsLoading(false); // Re-enable button after operation
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
