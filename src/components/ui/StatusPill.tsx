'use client';

import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

export function StatusPill() {
  if (!CONFIG.availableForWork) return null;
  return (
    <div className="flex items-center gap-2">
      <motion.div
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-2 w-2 rounded-full bg-accent-green"
      />
      <span className="text-sm font-medium text-accent-green">
        {CONFIG.statusText}
      </span>
    </div>
  );
}
