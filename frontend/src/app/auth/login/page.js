import React from 'react';
import AuthLayout from '../../../components/layout/AuthLayout';

const LoginPage = () => {
    return (
        <AuthLayout>
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
            <form>
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
                    Login
                </button>
            </form>
            <p className="text-center mt-4 text-gray-600">
                Don’t have an account? <a href="/auth/register" className="text-[#7da640]">Register</a>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;
