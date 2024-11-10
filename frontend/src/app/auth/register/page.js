// src/app/auth/register/page.js
import React from 'react';
import AuthLayout from '../../../components/layout/AuthLayout';

const RegisterPage = () => {
    return (
        <AuthLayout>
            <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 mb-4 border rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-[#7da640] text-white p-3 rounded hover:bg-green-700 transition"
                >
                    Register
                </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
                Already have an account? <a href="/auth/login" className="text-[#7da640]">Login</a>
            </p>
        </AuthLayout>
    );
};

export default RegisterPage;
