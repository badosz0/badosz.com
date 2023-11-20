'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
  url: string;
  emoji: string;
  name: string;
  description: string;
};

type RepoData = {
  stargazers_count: number;
};

export function Project({ url, emoji, name, description }: Props) {
  const [data, setData] = useState<RepoData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${url}`).then(async (response) => setData(await response.json()));
  }, [url]);

  return (
    <motion.a
      className="bg-card rounded-[16px] p-4 flex gap-4"
      href={`https://github.com/${url}`}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.99 }}
      layout
    >
      <img src={`/images/emojis/${emoji}.png`} className="h-12 w-12" alt={name} />
      <div className="flex-1">
        <div className="flex  items-center gap-2">
          <p className="text-lg font-bold text-white">{name}</p>
          <p className="text-xs text-secondary font-semibold bg-detail rounded-md p-2 py-0.5 flex items-center gap-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6089 2.93784C11.1139 1.68609 12.8861 1.68609 13.3911 2.93784L15.3284 7.73995C15.3991 7.91538 15.5628 8.03585 15.7514 8.05124L20.6175 8.4483C21.9369 8.55596 22.4802 10.1954 21.4862 11.0697L17.7937 14.3173C17.657 14.4375 17.5965 14.6225 17.6356 14.8002L18.8163 20.1673C19.1113 21.508 17.5996 22.5077 16.4814 21.7115L12.29 18.7272C12.1164 18.6036 11.8836 18.6036 11.71 18.7272L7.51866 21.7115C6.40041 22.5077 4.88872 21.508 5.18368 20.1673L6.36445 14.8002C6.40356 14.6225 6.343 14.4375 6.20634 14.3173L2.5137 11.0697C1.51964 10.1954 2.0629 8.55595 3.38234 8.4483L8.24864 8.05123C8.43718 8.03585 8.6009 7.91538 8.67167 7.73995L10.6089 2.93784Z" />
            </svg>{' '}
            {data?.stargazers_count ?? '..'}
          </p>
        </div>
        <p className="text-sm leading-1 text-secondary">{description}</p>
      </div>
    </motion.a>
  );
}
