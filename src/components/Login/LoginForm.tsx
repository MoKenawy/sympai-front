'use client';

import { useEffect, useState} from 'react';
import Link from 'next/link';
import { Button, Spacer } from '@nextui-org/react';
import { getAuthToken } from '@/data-access/chatbotAPI';


function LoginForm () {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    
    // Change with your form functionality
    const formFunction = async (e: React.FormEvent<HTMLFormElement>) => {
        const token = await getAuthToken(email, password)
        console.log(token)
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);

        formFunction(e);


    };


    return (
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>

            <input type="username" placeholder="Username" className="w-full px-4 py-2 mb-4 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type='submit' className="w-full bg-green-500 text-white px-4 py-2 rounded">Login</Button>
            <Spacer y={2} />
            <Button className="w-auto bg-gray-200 text-green-500 px-4 py-2 rounded">
                <Link href="/register">
                    Register
                </Link>

            </Button>
        </form>
    );

}

export default LoginForm;