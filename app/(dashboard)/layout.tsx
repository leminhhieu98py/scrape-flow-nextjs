import BreadcrumbHeader from '@/components/molecules/breadcrumb-header';
import DesktopSidebar from '@/components/molecules/sidebar/desktop-sidebar';
import MobileSidebar from '@/components/molecules/sidebar/mobile-sidebar';
import { ThemeModeToggle } from '@/components/molecules/theme-mode-toggle';
import { Separator } from '@/components/ui/separator';
import React, { PropsWithChildren } from 'react';

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <MobileSidebar />
          <BreadcrumbHeader />
          <div className="flex gap-1 items-center">
            <ThemeModeToggle />
          </div>
        </header>

        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
