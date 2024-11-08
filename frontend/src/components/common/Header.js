// components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-red-500">Restaurant Name</h1>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-red-500">Home</Link>
                    <Link href="/menu" className="hover:text-red-500">Menu</Link>
                    <Link href="/about" className="hover:text-red-500">About Us</Link>
                    <Link href="/contact" className="hover:text-red-500">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

