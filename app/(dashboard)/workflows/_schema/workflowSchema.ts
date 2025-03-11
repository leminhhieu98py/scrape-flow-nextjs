import { z } from 'zod';

const createWorkflowSchema = z.object({
  name: z.string().min(2, 'Min length 2').max(50, 'Max length 50'),
  description: z.string().max(100, 'Max length 100').optional()
});

type createWorkflowSchematype = z.infer<typeof createWorkflowSchema>;

export type { createWorkflowSchematype };

export { createWorkflowSchema };
