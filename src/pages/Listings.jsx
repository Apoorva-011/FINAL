import React from 'react';
import Card from '../components/Card';
import MiscCard from '../components/MiscCard';
import {data} from '../Data/Data'
import {latestUpdates} from '../Data/LatestUpdates'
import {miscItems} from '../Data/Misc'

const Listings = () => {
    return (
        <div className="flex">
            <div className="px-4 py-8 mt-12 ml-32 max-w-screen-lg bg-gray-100 flex-1">
                <h1 className="text-2xl font-bold mb-4 text-red-500">New Listings For You</h1>
                <div className="flex flex-nowrap overflow-x-auto mb-8">
                    {data.map((job, index) => (
                        <div key={index} className="mr-4">
                            <Card
                                jobId={job.jobId}
                                companyName={job.companyName}
                                logo={job.logo}
                                role={job.role}
                                ctc={job.ctc}
                                applyBefore={job.applyBefore}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <div className="w-full pr-4 mt-5">
                        <h2 className="text-xl font-bold mb-4">Latest Updates on Applied Jobs</h2>
                        <div className="space-y-8">
                            {latestUpdates.map((update, index) => (
                                <div key={index} className="rounded-lg p-4 bg-white shadow-md">
                                    <h3 className="text-lg font-bold mb-2">{update.update}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{update.companyName}</p>
                                    <p className="mb-2">{update.update}</p>
                                    <p className="text-sm text-gray-600">{update.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-auto px-4 py-8 mt-12 mr-32 max-w-screen-lg bg-gray-100 w-1/3">
                <h2 className="text-xl font-bold mb-4">Miscellaneous Info</h2>
                <div className="space-y-4">
                    {miscItems.map((item, index) => (
                        <div key={index} className="mb-4">
                            <MiscCard
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listings;
