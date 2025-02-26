'use client';

import { routes } from '@/constants/routes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

function SidebarMenuItems({ onClick }: Props) {
  const pathName = usePathname();
  const activeRoute =
    routes.find((route) => route.href.length > 0 && pathName.includes(route.href)) || routes[0];

  return (
    <>
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
          onClick={onClick}
        >
          <route.icon size={20} />
          {route.label}
        </Link>
      ))}
    </>
  );
}

export default SidebarMenuItems;
