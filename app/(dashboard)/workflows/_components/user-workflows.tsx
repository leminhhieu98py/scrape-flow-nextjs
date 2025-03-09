import { getWorkflowsByUserId } from '@/actions/workflows';
import { CustomAlert } from '@/components/molecules/custom-alert';
import EmptyState from '@/components/molecules/empty-state';

async function UserWorkflows() {
  try {
    const workflows = await getWorkflowsByUserId();

    if (!workflows) throw new Error('Invalid workflows: ', workflows);

    return <>{workflows.length ? <>Data</> : <EmptyState />}</>;
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
