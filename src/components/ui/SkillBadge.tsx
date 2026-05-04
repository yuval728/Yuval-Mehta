'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  colorClass: string;
}

export function SkillBadge({ name, colorClass }: SkillBadgeProps) {
  return (
    <motion.span
      className={`inline-block rounded-full border px-3 py-1.5 font-mono text-sm transition-all cursor-default ${colorClass}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      {name}
    </motion.span>
  );
}
