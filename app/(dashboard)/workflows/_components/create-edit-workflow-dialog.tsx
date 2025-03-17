'use client';

import CustomDialogHeader from '@/components/molecules/custom-dialog-header';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Layers2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { createWorkflowSchema, createWorkflowSchematype } from '../_schema/workflowSchema';
import { zodResolver } from '@hookform/resolvers/zod';

function CreateEditWorkflowDialog() {
  const form = useForm<createWorkflowSchematype>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {}
  });

  return (
    <Dialog>
      <DialogTrigger asChild className="mt-4">
        <Button>Create your first workflow</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <CustomDialogHeader
            icon={Layers2Icon}
            title="Create workflow"
            subTitle="Start building your workflow"
          />
        </DialogHeader>

        <div className="flex flex-col gap-8 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" required>
              Name
            </Label>
            <Input id="name" />
            <p className="text-xs text-muted-foreground">Choose a descriptive and unique name</p>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" />
            <p className="text-xs text-muted-foreground">
              Provide a brief description of what your workflow does.
              <br/>
              This is optional but can help you remember the workflow&apos;s purpose
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button className="w-full" type="submit">
            Proceed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateEditWorkflowDialog;
