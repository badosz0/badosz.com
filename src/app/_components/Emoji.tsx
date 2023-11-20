'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const EMOJIS: string[] = ['coffee', 'globe', 'laptop', 'poland', 'unicorn', 'keyboard'];

export function Emoji(): JSX.Element {
  const [emoji, setEmoji] = useState(0);

  return (
    <motion.img
      alt="emoji"
      src={`/images/emojis/${EMOJIS[emoji]}.png`}
      className="w-12 h-12 cursor-pointer"
      onClick={() => setEmoji((emoji + 1) % EMOJIS.length)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
}
