'use client'

import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TextEffect } from './ui/textEffect'

const IframeWithSkeleton = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const iframe = document.getElementById('youtube-iframe') as HTMLIFrameElement;
    if (iframe) {
      const handleIframeLoad = () => {
        setIframeLoaded(true);
      };

      iframe.addEventListener('load', handleIframeLoad);

      return () => {
        iframe.removeEventListener('load', handleIframeLoad);
      };
    }
  }, []);

  return (
    <>
      {!iframeLoaded && <Skeleton className="w-full max-w-2xl h-auto aspect-video" />}
      <iframe
        id="youtube-iframe"
        src="https://www.youtube.com/embed/Q6jDdtbkMIU?si=YtgU89RhYiwt5-U5"
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className={`w-full max-w-2xl h-auto aspect-video rounded-[6px] ${iframeLoaded ? '' : 'hidden'}`}
      ></iframe>
    </>
  );
};

export const Header = () => {
  return (
    <div className="flex flex-col items-center space-y-16 mt-32 mb-72 text-center">
        <div className="flex flex-col items-center lg:items-center lg:text-left">
          <TextEffect per='word' as='h2' preset='blur' className='text-4xl font-extrabold sm:text-5xl'>
            Test. Build. Ship.
          </TextEffect>
          <TextEffect per='word' as='h2' preset='blur' className='text-4xl font-extrabold sm:text-5xl'>
            Faster.
          </TextEffect>
          <br/>
          <TextEffect per='word' as='p' preset='blur' className="mt-4 text-lg text-foreground">
            Validate your SaaS Ideas within 1 min.
          </TextEffect>
        </div>
  
    </div>
  )
}