import { Info, CircleCheckBig, CircleX, LucideProps } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ForwardRefExoticComponent, PropsWithChildren, ReactNode, RefAttributes } from 'react';

type AlertStatus = 'INFO' | 'SUCCESS' | 'FAIL';

interface Props extends PropsWithChildren {
  status: AlertStatus;
  title: ReactNode;
  desc: ReactNode;
}

type IconMappingInfo = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  variant: 'destructive' | 'info' | 'success';
};

const ICON_MAPPING: Record<AlertStatus, IconMappingInfo> = {
  INFO: {
    icon: Info,
    variant: 'info'
  },
  SUCCESS: {
    icon: CircleCheckBig,
    variant: 'success'
  },
  FAIL: {
    icon: CircleX,
    variant: 'destructive'
  }
};

export function CustomAlert({ status, title, desc }: Props) {
  const Icon = ICON_MAPPING[status].icon;

  return (
    <Alert variant={ICON_MAPPING[status].variant}>
      <Icon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
}
