'use server';

import { auth } from '@clerk/nextjs/server';
import { PrismaClient, Workflow } from '@prisma/client';

const prisma = new PrismaClient();

const getWorkflowById = async (id: Workflow['id']): Promise<Workflow> => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error(`Not found userId. UserId is: ${userId}`);
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id,
      userId
    }
  });

  if (!workflow) {
    throw new Error(`Not found workflow. WorkflowId is: ${id}`);
  }

  return workflow;
};

export { getWorkflowById };
