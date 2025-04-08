'use client';

import '@xyflow/react/dist/style.css';
import { Workflow } from '@prisma/client';
import {
  BuiltInNode,
  Node,
  ReactFlow,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  OnConnect,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
  Panel,
  NodeToolbar,
  Position
} from '@xyflow/react';
import { useCallback } from 'react';

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
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full	h-full">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls position='top-left' />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          <NodeToolbar isVisible={true} position={Position.Top}>
            <button>delete</button>
            <button>copy</button>
            <button>expand</button>
          </NodeToolbar>
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default WorkflowEditor;
