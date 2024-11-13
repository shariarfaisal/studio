import { NotebookSidebar } from '@/components';
import { AppSidebar } from '@/components/app-sidebar';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

function Header() {
  return (
    <header className='sticky top-0 left-0 z-10 w-full h-16 p-3 bg-background border-b border-sidebar-border flex items-center gap-3'>
      <SidebarTrigger className='w-10 h-10 [&>svg]:!size-5' />
      <h1 className='text-2xl font-medium text-zinc-600'>Notebook</h1>
    </header>
  );
}

export default function NoteBookLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar>
        <NotebookSidebar />
      </AppSidebar>
      <main className='relative h-full max-w-full max-h-[100vh] overflow-auto flex-1 '>
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
