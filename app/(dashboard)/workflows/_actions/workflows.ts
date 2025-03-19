'use server';

import { Prisma, PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';
import { createWorkflowSchematype } from '../_schema/workflowSchema';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

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

const deleteWorkflow = async (id: WorkflowType['id']) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error(`Not found userId. UserId is: ${userId}`);
  }

  const result = await prisma.workflow.delete({
    where: {
      id,
      userId
    }
  });

  if (!result) {
    throw new Error('Fail to delete workflow');
  }

  revalidatePath('/workflows');
};

export { getWorkflowsByUserId, createWorkflow, deleteWorkflow };
