'use client';
import { useState } from "react";

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <span className="w-full px-3 py-2 border rounded">
                            <input type={passwordVisible ? "text" : "password"} 
                            id="password" className="" placeholder="Enter your password" />
                            <button type="button" onClick={togglePasswordVisibility}>
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </span>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    );
}