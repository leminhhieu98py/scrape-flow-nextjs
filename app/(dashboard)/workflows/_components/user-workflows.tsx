import { getWorkflowsByUserId } from '@/app/(dashboard)/workflows/_actions/workflows';
import { CustomAlert } from '@/components/molecules/custom-alert';
import EmptyState from '@/components/molecules/empty-state';
import CreateEditWorkflowDialog from './create-edit-workflow-dialog';

async function UserWorkflows() {
  try {
    const workflows = await getWorkflowsByUserId();

    if (!workflows) throw new Error('Invalid workflows: ', workflows);

    return (
      <>
        {workflows.length ? (
          <>Data</>
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
