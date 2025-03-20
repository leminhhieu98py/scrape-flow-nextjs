import Logo from '@/components/molecules/logo';
import { ThemeModeToggle } from '@/components/molecules/theme-mode-toggle';
import { Separator } from '@/components/ui/separator';
import { PropsWithChildren } from 'react';

function WorkflowLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ThemeModeToggle />
      </footer>
    </div>
  );
}

export default WorkflowLayout;
