import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import React from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          PLP Task Manager
        </h1>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Tasks</Link>
          <Link to="/api" className="text-blue-600 dark:text-blue-400 hover:underline">API Data</Link>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded border text-sm dark:text-white"
          >
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;