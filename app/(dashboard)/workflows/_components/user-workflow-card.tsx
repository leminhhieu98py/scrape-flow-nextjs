'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash, FileText } from 'lucide-react';
import { WorkflowType } from '../_actions/workflows';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

export default function UserWorkflowCard({ workflow }: { workflow: WorkflowType }) {
  return (
    <Card className="w-full flex items-center justify-between p-3 md:p-4 border border-gray-200 rounded-md shadow-sm">
      <div className="flex items-start md:items-center gap-3 w-full">
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-yellow-200 rounded-full shrink-0">
          <FileText className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-1 w-full">
          <Link
            href={`/workflows/editor/${workflow.id}`}
            className="text-sm md:text-base font-medium text-gray-800 max-w-[300px] md:max-w-[400px] truncate block hover:underline"
          >
            {workflow.name} asd,maskldma slkdma sdlkamsdklams dkams dkla.,smd lkasmd asldm asldm als,dm aslz,d m
          </Link>
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-700 w-fit text-xs font-light hover:bg-yellow-100"
          >
            {workflow.status}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="border rounded-sm p-1.5 md:p-2 bg-background hover:bg-accent hover:text-accent-foreground">
              <Link href={`/workflows/editor/${workflow.id}`}>
                <Pencil className="w-3 h-3 md:w-4 md:h-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs md:text-sm">Edit</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="border rounded-sm p-1.5 md:p-2 bg-red-500 hover:bg-red-600">
              <Trash className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs md:text-sm">Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
}
