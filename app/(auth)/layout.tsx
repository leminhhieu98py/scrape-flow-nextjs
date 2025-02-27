import Logo from '@/components/molecules/logo';
import { PropsWithChildren } from 'react';

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-8 items-center">
        <Logo />
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
