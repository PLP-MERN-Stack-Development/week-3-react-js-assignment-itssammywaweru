import TaskManager from '../components/TaskManager';
import React from 'react';

const TaskManagerPage = () => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
      <TaskManager />
    </div>
  );
};

export default TaskManagerPage;