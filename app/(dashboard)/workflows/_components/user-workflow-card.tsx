'use client';

import { Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash, FileText, Loader2Icon } from 'lucide-react';
import { deleteWorkflow } from '../_actions';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Workflow } from '@prisma/client';

export default function UserWorkflowCard({ workflow }: { workflow: Workflow }) {
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const onError = () => {
    toast.error('Failed to delete workflow', { id: `delete-workflow-${workflow.id}` });
    setOpen(false);
  };

  const onSuccess = () => {
    toast.success('Workflow deleted', { id: `delete-workflow-${workflow.id}` });
    setOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: deleteWorkflow,
    onSuccess,
    onError
  });

  return (
    <Card className="w-full flex items-center justify-between p-3 md:p-4 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900">
      <div className="flex items-start md:items-center gap-3 w-full">
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-yellow-200 dark:bg-yellow-700 rounded-full shrink-0">
          <FileText className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 dark:text-yellow-100" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 w-full">
          <Link
            href={`/workflows/editor/${workflow.id}`}
            className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-100 max-w-[300px] md:max-w-[400px] truncate block hover:underline"
          >
            {workflow.name}
          </Link>
          <Badge
            variant="secondary"
            className="bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-100 w-fit text-xs font-light"
          >
            {workflow.status}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}>
              <Link href={`/workflows/editor/${workflow.id}`}>
                <Pencil />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs md:text-sm">Edit</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <TooltipTrigger
                  className={cn(buttonVariants({ variant: 'destructive', size: 'sm' }))}
                >
                  <Trash />
                </TooltipTrigger>
              </DialogTrigger>
              <DialogContent className="dark:bg-gray-900 dark:border-gray-700">
                <DialogHeader>
                  <DialogTitle className="dark:text-gray-100">Are you sure?</DialogTitle>
                  <div className="flex flex-col gap-4 !mt-8">
                    <DialogDescription className="dark:text-gray-300">
                      This workflow will be permanently deleted. This action cannot be undone.
                      <br />
                      If you&apos;re sure, enter{' '}
                      <span className="font-bold text-primary">{workflow.name}</span> to confirm
                    </DialogDescription>
                    <Input
                      className="dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                      value={confirmText}
                      onChange={(e) => setConfirmText(e.currentTarget.value)}
                    />
                  </div>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="destructive"
                    className="dark:bg-red-700 dark:hover:bg-red-600"
                    onClick={() => mutate(workflow.id)}
                    disabled={confirmText !== workflow.name || isPending}
                  >
                    Yes, delete {isPending && <Loader2Icon className="animate-spin" />}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <TooltipContent>
              <p className="text-xs md:text-sm">Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
}
