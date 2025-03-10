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

function CreateEditWorkflowDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="mt-4">
        <Button>Create your first workflow</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <CustomDialogHeader
            icon={Layers2Icon}
            title="Create workflow"
            subTitle="Start building your workflow"
          />
        </DialogHeader>

        {/* TODO: Remove the sample body */}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        {/* End of the sample body */}

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateEditWorkflowDialog;
