import '@xyflow/react/dist/style.css';
import { Workflow } from '@prisma/client';
import { BuiltInNode, Node, ReactFlow, Edge } from '@xyflow/react';

interface Props {
  workflow: Workflow;
}

type PositionLoggerNode = Node<
  {
    label?: string;
  },
  'position-logger'
>;

type AppNode = BuiltInNode | PositionLoggerNode;

const initialNodes: AppNode[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } }
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

function WorkflowEditor({ workflow }: Props) {
  return (
    <div className="w-full	h-full">
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}

export default WorkflowEditor;
