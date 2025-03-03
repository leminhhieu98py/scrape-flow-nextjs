import UserWorkflows from '@/components/organisms/workflows/user-workflows';
import UserWorkflowsSkeleton from '@/components/organisms/workflows/user-workflows-skeleton';
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
