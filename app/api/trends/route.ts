import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const description = searchParams.get('description');
    const timePeriod = searchParams.get('time_period'); // Added time period parameter

    if (!description || !timePeriod) {
        return NextResponse.json({ error: 'Description and time period are required' }, { status: 400 });
    }

    try {
        const response = await axios.get('https://serpapi.com/search.json', {
            params: {
                engine: 'google_trends',
                q: description,
                hl: 'en',
                gl: 'us',
                api_key: process.env.SERPAPI_API_KEY,
                timePeriod // Include time period in request
            }
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching trends data:', error);
        return NextResponse.json({ error: 'Failed to fetch data from SERP API' }, { status: 500 });
    }
}