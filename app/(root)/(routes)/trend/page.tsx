'use client'
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import TrendsChart from '.././customize/_components/TrendsChart'; // Adjust the import path as necessary
import { Button } from '@/components/ui/button';

const Page = () => {
    const [projectIdea, setProjectIdea] = useState('');
    const [description, setDescription] = useState('');
    const [trendsData, setTrendsData] = useState<any>(null); // Adjust type if necessary
    const [selectedPeriod, setSelectedPeriod] = useState(''); // Add state for selected period
    const [report, setReport] = useState('');
    const [tweet, setTweet] = useState('');

    const handleDescribe = () => {
        toast.success('🔥 Describe Your Project Well!?');
    };

    const handleValidation = async () => {
        if (!projectIdea || !description || !selectedPeriod) {
            toast.error('❌ Please fill in all fields');
            return;
        }

        toast.loading('💻 Doing Research...');

        try {
            // Fetch trends data based on project idea
            const res = await fetch(`/api/trends?description=${encodeURIComponent(projectIdea)}&time_period=${encodeURIComponent(selectedPeriod)}`);
            const data = await res.json();

            // Fetch report and tweet from ChatGPT
            const reportRes = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectIdea,
                    description,
                    trendsData: data,
                }),
            });
            const reportData = await reportRes.json();

            toast.dismiss(); // Dismiss loading toast
            toast.success('✅ Research Complete!');

            setTrendsData(data); // Set the entire data object
            setReport(reportData.report); // Set the generated report
            setTweet(reportData.tweet); // Set the generated tweet

        } catch (error) {
            toast.error('❌ Failed to validate project');
        }
    };

    const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPeriod(event.target.value);
    };

    return (
        <div className='flex flex-col space-y-4 min-w-fit p-4'>
            <div>
                <h2 className="text-lg font-bold mt-4">Enter Your Project Idea</h2>
                <textarea
                    className="p-4 border rounded-lg resize-none h-32"
                    placeholder="Project idea..."
                    value={projectIdea}
                    onChange={(e) => setProjectIdea(e.target.value)}
                    rows={4}
                />
            </div>

            <div>
                <h2 className="text-lg font-bold mt-4">Describe Your Project</h2>
                <textarea
                    className="p-4 border rounded-lg resize-none h-32"
                    placeholder="Project description..."
                    value={description}
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
                    <option value="">Select a period</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2024-2025">2024 - 2025</option>
                    {/* Add more options as needed */}
                </select>
            </div>

            <Button onClick={handleValidation} className=" font-bold py-2 px-4 rounded">
                Validate
            </Button>

            {trendsData && (
                <div className='mt-4'>
                    <h3 className='text-md font-bold'>Trends Chart:</h3>
                    <TrendsChart data={trendsData} selectedPeriod={selectedPeriod} />
                </div>
            )}

            {report && (
                <div className='mt-4'>
                    <h3 className='text-md font-bold'>Generated Report:</h3>
                    <p>{report}</p>
                </div>
            )}

            {tweet && (
                <div className='mt-4'>
                    <h3 className='text-md font-bold'>Generated Tweet:</h3>
                    <p>{tweet}</p>
                </div>
            )}
        </div>
    );
};

export default Page;