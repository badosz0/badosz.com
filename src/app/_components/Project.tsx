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
          <p className="text-xs text-secondary font-semibold bg-detail rounded-md px-2 py-0.5">
            ✪ {data?.stargazers_count ?? '..'}
          </p>
        </div>
        <p className="text-sm leading-1 text-secondary">{description}</p>
      </div>
    </motion.a>
  );
}
