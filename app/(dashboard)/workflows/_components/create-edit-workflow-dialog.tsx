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
import { Layers2Icon } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createWorkflowSchema, createWorkflowSchematype } from '../_schema/workflowSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

function CreateEditWorkflowDialog() {
  const form = useForm<createWorkflowSchematype>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {}
  });

  const handleResetForm = () => {
    form.reset();
  };

  const onSubmit: SubmitHandler<createWorkflowSchematype> = (data) => {
    console.log('data', data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="mt-4">
        <Button>Create your first workflow</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]" onCloseAutoFocus={handleResetForm}>
        <DialogHeader>
          <CustomDialogHeader
            icon={Layers2Icon}
            title="Create workflow"
            subTitle="Start building your workflow"
          />
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-8 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-2">
                      <FormLabel required>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </div>
                    <FormDescription>Choose a descriptive and unique name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col gap-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Provide a brief description of what your workflow does.
                        <br />
                        This is optional but can help you remember the workflow&apos;s purpose
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="mt-4">
              <Button className="w-full" type="submit">
                Proceed
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateEditWorkflowDialog;
