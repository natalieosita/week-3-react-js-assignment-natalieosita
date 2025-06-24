import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-lg font-bold tracking-tight">MyApp</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;