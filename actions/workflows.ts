import { PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

const getWorkflowsByUserId = async () => {
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

export { getWorkflowsByUserId };
