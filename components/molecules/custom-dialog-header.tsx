import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, PropsWithChildren, ReactNode, RefAttributes } from 'react';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';

interface Props extends PropsWithChildren {
  icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  iconClassnames?: ClassValue;
  title?: ReactNode;
  titleClassnames?: ClassValue;
  subTitle?: ReactNode;
  subTitleClassnames?: ClassValue;
}

function CustomDialogHeader({
  icon,
  title,
  subTitle,
  iconClassnames,
  titleClassnames,
  subTitleClassnames,
}: Props) {
  const Icon = icon;

  return (
    <DialogHeader className="py-2">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2 pb-4 border-b-[1px] border-b-input">
          {Icon && <Icon size={30} className={cn('stroke-primary', iconClassnames)} />}
          {title && <p className={cn('text-xl text-primary', titleClassnames)}>{title}</p>}
          {subTitle && (
            <p className={cn('text-sm text-muted-foreground', subTitleClassnames)}>{subTitle}</p>
          )}
        </div>
      </DialogTitle>
    </DialogHeader>
  );
}

export default CustomDialogHeader;
