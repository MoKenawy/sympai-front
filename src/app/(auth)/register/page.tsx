'use client'


// app/register/page.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthToken } from '@/data-access/chatbotAPI';

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Call your API to register the user
            // For example: await registerUser(username, password);
            const token = await getAuthToken(username, password); // Example token retrieval
            // Store the token as needed (e.g., in cookies, local storage, etc.)
            router.push('/'); // Redirect to the homepage or dashboard
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Registration error:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default Register;
