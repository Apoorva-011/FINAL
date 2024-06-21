import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/Data"; // Assuming data is exported from a separate file
import { MdContactPage } from "react-icons/md";

const Details = () => {
    const { id } = useParams(); // Assuming the parameter is named 'id' in your route
    const job = data.find((job) => job.jobId === parseInt(id)); // Find the job by jobId

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const eventFile = event.target.files[0];
        setFile(eventFile);
        // You can add logic to upload the file to a server here
        console.log("Uploaded file:", eventFile);
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    if (!job) {
        return <div>Job not found</div>; // Handle case where job is not found
    }

    return (
        <div className="mt-20 ml-32">
            <div className="text-red-500 font-bold mb-4 text-xl">
                New Listing for you
            </div>

            <div className="bg-white px-8 py-4 w-[70vw] mb-4 max-md:w-full">
                <div className="flex gap-2">
                    <img src={job.logo} className="h-20 w-20 object-contain" alt="Company Logo" />
                    <p className="flex justify-center ml-4 items-center text-4xl font-semibold text-slate-600 max-md:text-2xl">
                        {job.companyName}
                    </p>
                </div>

                <div className="flex gap-16 mt-10">
                    <div className="text-slate-400 flex flex-col gap-2">
                        <p className="max-md:h-12 overflow-hidden">Role</p>
                        <p className="max-md:h-12 overflow-hidden">CTC</p>
                        <p className="max-md:h-12 overflow-hidden">Location</p>
                        <p className="max-md:h-12 overflow-hidden">Info Field</p>
                        <p className="max-md:h-12 overflow-hidden">Info Field</p>
                        <p className="max-md:h-12 overflow-hidden">Info Field</p>
                        <p className="max-md:h-12 overflow-hidden">Apply Before</p>
                    </div>
                    <div className="font-semibold flex flex-col gap-2">
                        <p className="max-md:h-12 overflow-hidden">{job.role}</p>
                        <p className="max-md:h-12 overflow-hidden">{job.ctc}</p>
                        <p className="max-md:h-12 overflow-hidden">{job.location}</p>
                        <p className="max-md:h-12 overflow-hidden">{job.info1}</p>
                        <p className="max-md:h-12 overflow-hidden">{job.info2}</p>
                        <p className="max-md:h-12 overflow-hidden">{job.info3}</p>
                        <p className="max-md:h-12 overflow-hidden">{job.applyBefore}</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-4 max-md:flex-col">
                <input 
                    type="file" 
                    id="fileInput" 
                    className="hidden" 
                    onChange={handleFileChange}
                />
                <button 
                    type="button" 
                    className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2" 
                    onClick={handleButtonClick}
                >
                    <span className="ms-2">Upload Resume</span>
                    <MdContactPage className="h-6 w-6 ml-2" />
                </button>

                <button 
                    type="button" 
                    className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                >
                    <span className="ms-2">More Details</span>
                    <MdContactPage className="h-6 w-6 ml-2" />
                </button>
            </div>
            {file && (
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Uploaded File: {file.name}</p>
                </div>
            )}
        </div>
    );
};

export default Details;
