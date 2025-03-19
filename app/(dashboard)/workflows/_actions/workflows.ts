'use server';

import { Prisma, PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';
import { createWorkflowSchematype } from '../_schema/workflowSchema';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export type WorkflowType = Prisma.WorkflowGetPayload<{}>;

const getWorkflowsByUserId = async (): Promise<WorkflowType[]> => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error(`Not found userId. UserId is: ${userId}`);
  }

  const workflows = await prisma.workflow.findMany({
    where: {
      userId
    },
    orderBy: {
      updatedAt: 'desc'
    }
  });

  return workflows;
};

const createWorkflow = async (inputData: createWorkflowSchematype) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error(`Not found userId. UserId is: ${userId}`);
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      definition: 'TODO',
      ...inputData
    }
  });

  if (!result) {
    throw new Error('Fail to create workflow');
  }

  redirect(`/workflows/editor/${result.id}`);
};

export { getWorkflowsByUserId, createWorkflow };
