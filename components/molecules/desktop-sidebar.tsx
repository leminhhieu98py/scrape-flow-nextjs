'use client';

import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon } from 'lucide-react';
import Logo from './logo';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const routes = [
  {
    href: '',
    label: 'Home',
    icon: HomeIcon
  },
  {
    href: 'workflows',
    label: 'Workflows',
    icon: Layers2Icon
  },
  {
    href: 'credentials',
    label: 'Credentials',
    icon: ShieldCheckIcon
  },
  {
    href: 'billing',
    label: 'Billing',
    icon: CoinsIcon
  }
];

function DesktopSidebar() {
  const pathName = usePathname();
  const activeRoute =
    routes.find((route) => route.href.length > 0 && pathName.includes(route.href)) || routes[0];

  return (
    <div className="hidden relative md:block w-[280px] h-screen overflow-hidden bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>
      {/* TODO: implement credits later */}
      <div className="p-2">Credits</div>
      <div className="flex flex-col p-2">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={`/${route.href}`}
            className={cn(
              '[&:not(:first-child)]:mt-2',
              buttonVariants({
                variant: route.href === activeRoute.href ? 'sidebarActiveItem' : 'sidebarItem'
              })
            )}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
