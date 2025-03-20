import { getWorkflowsByUserId } from '@/app/(dashboard)/workflows/_actions';
import { CustomAlert } from '@/components/molecules/custom-alert';
import EmptyState from '@/components/molecules/empty-state';
import CreateEditWorkflowDialog from './create-edit-workflow-dialog';
import UserWorkflowCard from './user-workflow-card';
import { Workflow } from '@prisma/client';

async function UserWorkflows() {
  try {
    const workflows: Workflow[] = await getWorkflowsByUserId();

    if (!workflows) throw new Error('Invalid workflows: ', workflows);

    return (
      <>
        {workflows.length ? (
          <div className="flex flex-col gap-4 w-full mt-12">
            {workflows.map((workflow) => (
              <UserWorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        ) : (
          <EmptyState
            additionalText="Click the button below the create your first workflows"
            additionalCreateButton={<CreateEditWorkflowDialog />}
          />
        )}
      </>
    );
  } catch (e) {
    console.log(e);

    return (
      <CustomAlert
        status="FAIL"
        title="Error"
        desc="Something went wrong, please try again later"
      />
    );
  }
}

export default UserWorkflows;
