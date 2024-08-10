import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    const { projectIdea, description, trendsData } = await request.json();

    if (!projectIdea || !description || !trendsData) {
        return NextResponse.json({ error: 'Project idea, description, and trends data are required' }, { status: 400 });
    }

    try {
        const prompt = `
            Given the project idea: "${projectIdea}", the project description: "${description}", and the trends data: ${JSON.stringify(trendsData)}, 
            generate a detailed report rating the project out of 10 based on its potential success and the percentage likelihood of people paying for it and how much they would pay for such item, have them in different sections and also write it in Markdown . 
            Also, create a catchy Twitter post to ask the community for their opinion on the idea. 
            Please ensure the report is detailed and the tweet is engaging. 
            
            ### Report:
            ### Tweet:
        `;

        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo', // Use the model of your choice
            messages: [{ role: 'user', content: prompt }],
        });

        const choice = response.choices[0];
        if (!choice || !choice.message || !choice.message.content) {
            throw new Error('Response format is unexpected');
        }

        // Get the response text
        const result = choice.message.content.trim();

        // Split the response into report and tweet using explicit markers
        const reportMatch = result.match(/### Report:\n([\s\S]*?)(?=\n### Tweet:|$)/);
        const tweetMatch = result.match(/### Tweet:\n([\s\S]*)/);

        // Extract the report and tweet if available
        const report = reportMatch ? reportMatch[1].trim() : 'No report available';
        const tweet = tweetMatch ? tweetMatch[1].trim() : 'No tweet available';

        return NextResponse.json({ report, tweet });
    } catch (error) {
        console.error('Error generating report and tweet:', error);
        return NextResponse.json({ error: 'Failed to generate report and tweet' }, { status: 500 });
    }
}