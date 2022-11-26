import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  by: number;
  children: ReactNode;
};

export function Offset({ by, children }: Props): JSX.Element {
  return (
    <motion.div
      layout
      initial={{ scale: 1, opacity: 0, y: 5 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: by, duration: 0.75, type: 'spring' }}
    >
      {children}
    </motion.div>
  );
}
