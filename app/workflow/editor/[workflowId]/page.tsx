import { notFound } from 'next/navigation';
import { getWorkflowById } from './_actions';

async function WorkflowPage({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;

  try {
    const workflow = await getWorkflowById(workflowId);

    return <div>{workflow.name}</div>;
  } catch (e) {
    console.log(e);

    notFound();
  }
}

export default WorkflowPage;
