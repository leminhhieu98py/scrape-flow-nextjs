'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;
