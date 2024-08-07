'use client';

import { motion } from 'framer-motion';

type Props = {
  name: string;
  description: string;
  href: string;
  image: string;
  time: string;
  extra?: string;
};

export function Work({ name, description, href, image, time, extra }: Props) {
  return (
    <motion.a
      className="bg-card rounded-[16px] p-4 flex-col sm:flex-row flex gap-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.99 }}
    >
      <img src={image} className="h-24 rounded-md aspect-video object-cover" alt={name} />
      <div className="flex-1">
        <div className="flex  items-center gap-2">
          <p className="text-lg font-bold text-white">{name}</p>
          <p className="text-xs text-secondary font-semibold bg-detail rounded-md px-2 py-0.5">{time}</p>
          {extra && <p className="text-xs text-secondary font-semibold bg-detail rounded-md px-2 py-0.5">{extra}</p>}
        </div>
        <p className="text-sm leading-1 text-secondary">{description}</p>
      </div>
    </motion.a>
  );
}
