'use client';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

// Define notify function
const notify = () => toast.success('Registered Successfully');

// Define RegisterPage component
function RegisterPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    // Handle input changes
    const onPassChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    }
    const onUserChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setUsername(e.target.value);
    }
    const onConChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setConfirm(e.target.value);
    }

    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password !== confirm) {
            return alert("Your passwords do not match.");
        }
        try {
            const res = await fetch('/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (res.ok) {
              notify();
                setTimeout(() => {
                  router.push('/login');
                },1000)    
                
            } else {
                throw new Error('Could not add register details');
            }
        } catch (error) {
            alert("user already exists.");
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-zinc-800 p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Create an account</h2>
                </div>
                <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" value={username} onChange={onUserChange} />
                        </div>
                        <br />
                        <div className="mt-4">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 placeholder-gray-400 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={onPassChange} />
                        </div>
                        <br />
                        <div className="mt-4">
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" value={confirm} onChange={onConChange} />
                        </div>
                    </div>
                    <br />
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out">
                            Register
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?
                    <a href="/login" className="ml-1 font-medium text-green-400 hover:text-green-500">Login here</a>
                </div>
            </div>
            {/* Toaster component rendered at the root */}
            <Toaster />
        </div>
    );
}

// Export RegisterPage component
export default RegisterPage;
