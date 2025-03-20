import { getWorkflowById } from './_actions';
import { CustomAlert } from '@/components/molecules/custom-alert';

async function WorkflowPage({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;

  try {
    const workflow = await getWorkflowById(workflowId);

    console.log('workflow', workflow)

    return <div>{workflow.name}</div>;
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

export default WorkflowPage;
