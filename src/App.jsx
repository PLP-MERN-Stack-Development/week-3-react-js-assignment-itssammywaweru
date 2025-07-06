import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import TaskManagerPage from './pages/TaskManagerPage';
import ApiDataPage from './pages/ApiDataPage';

function App() {
  return (
    <div className="bg-red-500 text-white text-xl p-6 text-center">
  ✅ If this is red, Tailwind is working!
</div>
)
}

export default App;