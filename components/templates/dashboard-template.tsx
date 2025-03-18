import { PropsWithChildren, ReactNode, Suspense } from 'react';

interface Props extends PropsWithChildren {
  title: ReactNode;
  description: ReactNode;
  fallback?: ReactNode;
  additionalButtons?: ReactNode;
}

function DashboardTemplate({ title, description, fallback, children, additionalButtons }: Props) {
  return (
    <>
      <div className="mb-4 relative">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xs text-muted-foreground">{description}</p>

        {additionalButtons && <div className="absolute right-0 -top-4">{additionalButtons}</div>}
      </div>
      <Suspense fallback={fallback}>{children}</Suspense>
    </>
  );
}

export default DashboardTemplate;
