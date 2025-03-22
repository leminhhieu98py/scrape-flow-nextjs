import { notFound } from 'next/navigation';
import { getWorkflowById } from './_actions';
import WorkflowEditor from '../_components/WorkflowEditor';

async function WorkflowPage({ params }: { params: { workflowId: string } }) {
  const { workflowId } = params;

  try {
    const workflow = await getWorkflowById(workflowId);

    return (
      <div>
        <WorkflowEditor workflow={workflow} />
      </div>
    );
  } catch (e) {
    console.log(e);

    notFound();
  }
}

export default WorkflowPage;
