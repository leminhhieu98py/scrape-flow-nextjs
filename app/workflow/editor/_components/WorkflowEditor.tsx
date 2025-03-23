import { Workflow } from '@prisma/client';

interface Props {
  workflow: Workflow;
}

function WorkflowEditor({ workflow }: Props) {
    // TODO: read react flow documents
  return <div>WorkflowEditor: {workflow.name}</div>;
}

export default WorkflowEditor;
