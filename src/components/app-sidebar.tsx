'use client';
import featureList from '@/lib/featuresList';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="pt-2 pl-2">
      <SidebarHeader>
        <Link href="/">
          <h2 className="text-2xl">
            Film
            <span className="font-bold">Fusion</span>
          </h2>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {featureList.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className={pathname.includes(item.link) ? 'bg-gray-300' : ''}
                  asChild
                >
                  <a href={item.link}>
                    <item.icon />
                    <span className="text-xl">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pb-12">
        <Link className="underline" href="/quick-guide">
          Quick Guide
        </Link>
        <Link className="underline" href="/logout">
          Logout
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
