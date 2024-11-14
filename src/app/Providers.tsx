'use client';

import NotebookProvider from '@/components/notebook/provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NotebookProvider>{children}</NotebookProvider>
      </QueryClientProvider>
    </>
  );
}
