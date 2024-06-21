// RightSidebar.js
import React from 'react';
import MiscCard from '../components/MiscCard';

const RightSidebar = () => {
  // Example data for miscellaneous items
  const miscItems = [
    {
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Event 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      title: 'Event 3',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="fixed top-20 right-0 h-full bg-gray-100 w-80 flex flex-col items-center justify-between shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Miscellaneous</h2>
        {miscItems.map((item, index) => (
          <MiscCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
