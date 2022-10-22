import { useEffect, useState } from 'react';
import GithubIcon from '../../../icons/Github';

type Props = {
  url: `${string}/${string}`;
};

export default function Repository({ url }: Props): JSX.Element {
  const [ data, setData ] = useState<any>(null); // TODO: type

  useEffect(() => {
    fetch(`https://api.github.com/repos/${url}`)
      .then(async response => setData(await response.json()));
  }, [ url ]);

  if (!data) {
    return <></>;
  }

  return (
    <a href={data.html_url} target="_blank">
      <div className='flex space-x-4 items-center'>
        <div className='w-16 h-14 rounded-md bg-gray-100 flex items-center justify-center'>
          <GithubIcon className="h-8 w-8" />
        </div>
        <div className='flex flex-col -space-y-1 w-full'>
          <div className='flex justify-between'>
            <span className='font-semibold'>{data.name}</span>
            <span className='text-gray-400'>★ {data.stargazers_count}</span>
          </div>
          <div className='text-gray-600'>{data.description}</div>
        </div>
      </div>
    </a>
  );
}
