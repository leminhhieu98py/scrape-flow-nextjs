import { Workflow } from '@prisma/client';

interface Props {
  workflow: Workflow;
}

function WorkflowEditor({ workflow }: Props) {
  return <div>WorkflowEditor: {workflow.name}</div>;
}

export default WorkflowEditor;
