// app/client-layout.tsx
'use client'; // Mark this file as a client-side component

import { SessionProvider } from 'next-auth/react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {/* Client-side components here */}
      {children}
    </SessionProvider>
  );
}
