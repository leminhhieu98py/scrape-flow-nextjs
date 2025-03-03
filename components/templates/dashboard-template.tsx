import { PropsWithChildren, ReactNode, Suspense } from 'react';

interface Props extends PropsWithChildren {
  title: ReactNode;
  description: ReactNode;
  fallback?: ReactNode;
}

function DashboardTemplate({ title, description, fallback, children }: Props) {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <Suspense fallback={fallback}>{children}</Suspense>
    </>
  );
}

export default DashboardTemplate;
