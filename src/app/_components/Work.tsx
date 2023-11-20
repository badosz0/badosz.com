'use client';

import { motion } from 'framer-motion';

type Props = {
  name: string;
  description: string;
  href: string;
  image: string;
  time: string;
};

export function Work({ name, description, href, image, time }: Props) {
  return (
    <motion.a
      className="bg-card rounded-md p-4 flex gap-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.99 }}
    >
      <img src={image} className="h-24 rounded-md aspect-video" />
      <div className="flex-1">
        <div className="flex  items-center gap-2">
          <p className="text-lg font-bold text-white">{name}</p>
          <p className="text-xs text-secondary font-semibold bg-detail rounded-md px-2 py-0.5">{time}</p>
        </div>
        <p className="text-sm leading-1 text-secondary">{description}</p>
      </div>
    </motion.a>
  );
}
