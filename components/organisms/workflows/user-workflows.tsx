import { getWorkflowsByUserId } from '@/actions/workflows';
import { CustomAlert } from '@/components/molecules/custom-alert';

async function UserWorkflows() {
  try {
    const workflows = await getWorkflowsByUserId();

    return <div>Workflows</div>;
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
