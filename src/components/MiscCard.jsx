import React from 'react';

const MiscCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded shadow-md p-4 mb-4 w-80 h-72">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default MiscCard;
