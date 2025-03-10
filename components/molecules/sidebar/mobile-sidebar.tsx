'use client';

import { MenuIcon } from 'lucide-react';
import SidebarMenuItems from './sidebar-menu-items';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import Logo from '@/components/molecules/logo';

function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const handleClickSidebarMenuItem = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden w-[280px]" side="left">
        <SheetHeader className="gap-2 border-b-[1px] border-separate p-4">
          <Logo />
        </SheetHeader>
        <div className="flex flex-col py-2">
          <SidebarMenuItems onClick={handleClickSidebarMenuItem} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
