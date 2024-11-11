const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 w-full h-16 px-5 bg-background border-b border-sidebar-border flex items-center gap-3">
      <h1 className="text-2xl font-medium text-zinc-600">Notebook</h1>
    </header>
  );
};

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="relative min-h-[100vh] max-w-full max-h-[100vh] overflow-auto flex-1 ">
        <Header />
        <div className="p-5">{children}</div>
      </main>
    </>
  );
};

export { HomepageLayout };
