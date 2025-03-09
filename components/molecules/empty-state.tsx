import { cn } from '@/lib/utils';
import { InboxIcon } from 'lucide-react';

interface EmptyStateProps {
  additionalText?: string;
  onClick?: () => void;
}

export default function EmptyState({ additionalText, onClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div
        className={cn(
          'w-20 h-20 rounded-full bg-secondary flex justify-center items-center',
          !onClick && 'cursor-pointer'
        )}
        onClick={onClick}
      >
        <InboxIcon size={40} className="mb-2 stroke-primary" />
      </div>
      <p className="mt-4 font-bold">There is no data to display</p>
      {additionalText && <p className="text-sm text-muted-foreground">{additionalText}</p>}
    </div>
  );
}
