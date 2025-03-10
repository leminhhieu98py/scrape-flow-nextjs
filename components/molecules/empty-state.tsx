'use client';

import { InboxIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface EmptyStateProps {
  additionalText?: string;
  additionalCreateButton?: ReactNode;
}

export default function EmptyState({ additionalText, additionalCreateButton }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-20 h-20 rounded-full bg-secondary flex justify-center items-center">
        <InboxIcon size={40} className="mb-2 stroke-primary" />
      </div>
      <p className="mt-4 font-bold">There is no data to display</p>
      {additionalText && <p className="text-sm text-muted-foreground">{additionalText}</p>}
      {additionalCreateButton || <></>}
    </div>
  );
}
