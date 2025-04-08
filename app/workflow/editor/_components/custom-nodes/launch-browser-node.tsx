import React from 'react';
import { TaskType } from '@/app/workflow/editor/editor';
import { GlobeIcon, LucideProps } from 'lucide-react';

export const LaunchBrowserNodeType = {
  type: TaskType.LAUNCH_BROWSER,
  label: 'Launch Browser',
  icon: (props: LucideProps) => <GlobeIcon className="stroke-pink-400" {...props} />,
  isEntryPoint: true
};

function LaunchBrowserNode() {
  return <div>LaunchBrowserNode</div>;
}

export default LaunchBrowserNode;
