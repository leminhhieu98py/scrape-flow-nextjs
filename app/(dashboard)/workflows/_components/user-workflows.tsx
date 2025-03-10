import { getWorkflowsByUserId } from '@/app/(dashboard)/workflows/_actions/workflows';
import { CustomAlert } from '@/components/molecules/custom-alert';
import EmptyState from '@/components/molecules/empty-state';

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
            // createText="Create your first workflow"
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
