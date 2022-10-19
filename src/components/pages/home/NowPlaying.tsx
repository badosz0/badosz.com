import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { NowPlaying } from '../../../lib/spotify';
import { formatMilliseconds } from '../../../lib/time';

export default function HomeNowPlaying(): JSX.Element {
  const { data: nowPlaying } = useSWR<NowPlaying>('/api/spotify', {
    refreshInterval: 5000,
  });
  const [ progress, setProgress ] = useState(nowPlaying?.progress ?? 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 2);
    }, 2);

    return () => clearInterval(interval);
  }, [ progress ]);

  useEffect(() => {
    if (nowPlaying?.progress) {
      setProgress(nowPlaying.progress);
    }
  }, [ nowPlaying ]);

  if (!nowPlaying || Object.keys(nowPlaying).length === 0) {
    return <></>;
  }

  return (

    <div className='flex flex-col space-y-2'>
      <div className='text-lg font-semibold border-b pb-2 mb-2'>
        Now Playing
      </div>
      <div className='flex space-x-2'>
        <div className='w-16'>
          <img
            src={nowPlaying.albumImage}
            className="object-cover rounded-md aspect-square"
          />
        </div>
        <div className='flex flex-col space-y-2 justify-items-center flex-1'>
          <div className='flex flex-col -space-y-1'>
            <div className='font-semibold'>{nowPlaying.title}</div>
            <div className='flex justify-between items-center text-gray-400'>
              <div className='text-sm'>{nowPlaying.artists}</div>
              <div className='text-sm'>{formatMilliseconds(progress)}</div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute h-2 rounded-sm w-full bg-gray-200'/>
            <div className='absolute h-2 rounded-sm bg-green-300' style={{
              width: `${Math.min(100, progress / nowPlaying.duration * 100)}%`,
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
}
