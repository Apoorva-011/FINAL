import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ jobId, companyName, logo, role, ctc, applyBefore }) => {
  return (
    <div className="flex-shrink-0 w-80 h-72 p-6 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4">
          <img src={logo} className="h-12 w-12 object-contain" alt={`${companyName} Logo`} />
          <p className="ml-4 text-xl font-bold">{companyName}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold text-slate-400">Role:</span>
            <span className='font-semibold'>{role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-400">CTC:</span>
            <span className='font-semibold'>{ctc}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-400">Apply Before:</span>
            <span className='font-semibold'>{applyBefore}</span>
          </div>
        </div>
      </div>
      <div className="mt-auto text-center">
        <Link to={`${jobId}/details`} className="text-red-500 font-semibold">More Info{">"}</Link>
      </div>
    </div>
  );
};

export default Card;
