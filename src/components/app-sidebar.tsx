import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar className="z-10">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="md:text-lg text-zinc-700 lg:text-2xl xl:text-2xl font-semibold rounded-none h-16">
            IGot Studio
          </SidebarGroupLabel>
          <SidebarGroupContent>{children}</SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
