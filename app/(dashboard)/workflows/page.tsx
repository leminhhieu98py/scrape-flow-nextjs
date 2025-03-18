import UserWorkflows from '@/app/(dashboard)/workflows/_components/user-workflows';
import UserWorkflowsSkeleton from '@/app/(dashboard)/workflows/_components/user-workflows-skeleton';
import DashboardTemplate from '@/components/templates/dashboard-template';
import CreateEditWorkflowDialog from './_components/create-edit-workflow-dialog';

function WorkflowsPage() {
  return (
    <DashboardTemplate
      title="Workflows"
      description="Manage you workflows"
      fallback={<UserWorkflowsSkeleton />}
      additionalButtons={<CreateEditWorkflowDialog customCreateText="Create workflow" />}
    >
      <UserWorkflows />
    </DashboardTemplate>
  );
}

export default WorkflowsPage;
