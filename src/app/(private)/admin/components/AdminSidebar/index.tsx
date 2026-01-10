'use client';

import LogoutButton from '@/app/(private)/admin/components/LogoutButton';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from '@/components/ui/sidebar';
import { FolderKanban, Cpu, Briefcase, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin',
    icon: LayoutDashboard
  },
  {
    id: 'projects',
    label: 'Projetos',
    path: '/admin/projects',
    icon: FolderKanban
  },
  {
    id: 'technologies',
    label: 'Tecnologias',
    path: '/admin/technologies',
    icon: Cpu
  },
  {
    id: 'experiences',
    label: 'Experiências',
    path: '/admin/experiences',
    icon: Briefcase
  }
];

export default function AdminSidebar() {
  const currentPath = usePathname();
  const [activeRoute, setActiveRoute] = useState<string>(currentPath);

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <h2 className="text-md flex items-center gap-2 font-roboto-flex text-gray dark:text-white">
          Admin panel
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.path;
              return (
                <li
                  className={`cursor-pointer rounded-md text-lg transition-colors duration-300 ${isActive ? 'bg-primary/70' : 'hover:bg-[#fff]/40 dark:hover:bg-gray/60'}`}
                  key={item.id}
                  onClick={() => setActiveRoute(item.path)}
                >
                  <Link
                    className={`flex w-full items-center gap-2 py-2 pl-4 font-medium`}
                    href={{ pathname: item.path }}
                  >
                    <Icon />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
