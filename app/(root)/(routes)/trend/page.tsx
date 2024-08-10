// page.tsx
'use client'
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import TrendsChart from '.././customize/_components/TrendsChart'; // Adjust the import path as necessary

const Page = () => {
    const [description, setDescription] = useState('');
    const [trendsData, setTrendsData] = useState<any>(null); // Adjust type if necessary
    const [selectedPeriod, setSelectedPeriod] = useState(''); // Add state for selected period

    const handleDescribe = () => {
        toast.success('🔥 Describe Your Project Well!?');
    };

    const handleValidation = async () => {
        if (!selectedPeriod) {
            toast.error('❌ Please select a time period');
            return;
        }

        toast.loading('💻 Doing Research...');

        try {
            const res = await fetch(`/api/trends?description=${encodeURIComponent(description)}&time_period=${encodeURIComponent(selectedPeriod)}`);
            const data = await res.json();

            toast.dismiss(); // Dismiss loading toast
            toast.success('✅ Research Complete!');

            setTrendsData(data); // Set the entire data object
        } catch (error) {
            toast.error('❌ Failed to validate project');
        }
    };

    const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPeriod(event.target.value);
    };

    return (
        <div className='flex flex-col space-y-4 min-w-max p-4'>
            <div>
                <h2 className="text-lg font-bold mt-4">Describe Your Project Idea</h2>
                <textarea
                    className="p-4 border rounded-lg resize-none h-32"
                    placeholder="Project is about how to drink water"
                    value={description}
                    onClick={handleDescribe}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />
            </div>

            <div className='flex flex-col space-y-2'>
                <label htmlFor="time_period" className="text-md font-bold">Select Time Period:</label>
                <select
                    id="time_period"
                    className="p-2 border rounded-lg"
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
                >
                    <option value="2024">1 Year</option>
                 
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <button onClick={handleValidation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Validate
            </button>

            {trendsData && (
                <div className='mt-4'>
                    <h3 className='text-md font-bold'>Trends Chart:</h3>
                    <TrendsChart data={trendsData} selectedPeriod={selectedPeriod} />
                </div>
            )}
        </div>
    );
};

export default Page;