import React from 'react';

const Card = ({ title, body }) => {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md bg-white dark:bg-gray-700">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{body}</p>
    </div>
  );
};

export default Card;