import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Login successful
                Router.push('/dashboard');
            } else {
                // Login failed
                const errorData = await response.json();
                setErrorMessage(errorData.message); // Set the error message
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {errorMessage && (
                    <p className="text-red-500 mb-4">{errorMessage}</p>
                )}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-gray-600">
                    Don't have an account yet?{' '}
                    <Link href="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}

export default Login;

