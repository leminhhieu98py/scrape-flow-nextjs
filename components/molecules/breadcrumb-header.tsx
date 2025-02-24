'use client';
import { usePathname } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '../ui/breadcrumb';
import Link from 'next/link';

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName === '/' ? [''] : pathName.split('/');

  return (
    <div className="flex items-center flex-start">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild={true} className="capitalize">
                <Link href={`/${path}`}>{path === '' ? 'Home' : path}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbHeader;
