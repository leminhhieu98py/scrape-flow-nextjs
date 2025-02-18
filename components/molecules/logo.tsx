import { cn } from '@/lib/utils';
import { SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
  fontSize?: string;
  iconSize?: number;
};

function Logo({ fontSize = 'text-2xl', iconSize = 20 }: Props) {
  return (
    <Link href="/" className={cn('text-2xl font-extrabold flex items-center gap-2', fontSize)}>
      <div className="rounded-xl bg-gradient-to-r from-primary/70 to-primary/90 p-2">
        <SquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      <div>
        <span className="bg-gradient-to-r from-primary/70 to-primary/90 bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-stone-700 dark:text-stone-300">Scrape</span>
      </div>
    </Link>
  );
}

export default Logo;
