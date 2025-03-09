import UserWorkflows from '@/app/(dashboard)/workflows/_components/user-workflows';
import UserWorkflowsSkeleton from '@/app/(dashboard)/workflows/_components/user-workflows-skeleton';
import DashboardTemplate from '@/components/templates/dashboard-template';
import React, { Suspense } from 'react';

function Workflows() {
  return (
    <DashboardTemplate
      title="Workflows"
      description="Manage you workflows"
      fallback={<UserWorkflowsSkeleton />}
    >
      <UserWorkflows />
    </DashboardTemplate>
  );
}

export default Workflows;
