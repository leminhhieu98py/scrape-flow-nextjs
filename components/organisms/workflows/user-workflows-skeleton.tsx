import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const sampleArr = new Array(4).fill(true);

function UserWorkflowsSkeleton() {
  return (
    <div className="space-y-2">
      {sampleArr.map((_, index) => (
        <Skeleton className="h-32 w-full" key={index} />
      ))}
    </div>
  );
}

export default UserWorkflowsSkeleton;
