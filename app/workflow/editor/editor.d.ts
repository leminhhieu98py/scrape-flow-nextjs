import { Node } from '@xyflow/react';

enum TaskType {
  LAUNCH_BROWSER = 'LAUNCH_BROWSER'
}

export type TCustomNodeData = Record<string, any> & {
  type: TaskType;
  inputs: Record<string, string>;
};

export type TCustomNode = Node & {
  data: TCustomNodeData;
};
