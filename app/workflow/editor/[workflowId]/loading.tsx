import { Loader2Icon } from 'lucide-react';

function WorkflowLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}

export default WorkflowLoading;
