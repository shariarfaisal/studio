import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

const AppSidebar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Sidebar className={`z-10  ${className}`}>
      <SidebarContent className="scroll-y">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="sticky top-0 left-0 w-full bg-sidebar md:text-lg text-zinc-700 lg:text-2xl xl:text-2xl font-semibold rounded-none h-14 justify-center z-10">
            IGot Studio
          </SidebarGroupLabel>
          <SidebarGroupContent>{children}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export { AppSidebar };
