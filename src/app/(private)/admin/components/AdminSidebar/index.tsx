'use client';

import LogoutButton from '@/app/(private)/admin/components/LogoutButton';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from '@/components/ui/sidebar';
import { SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/admin' },
  { id: 'projects', label: 'Projetos', path: '/admin/projects' },
  { id: 'technologies', label: 'Tecnologias', path: '/admin/technologies' },
  { id: 'experiences', label: 'Experiências', path: '/admin/experiences' }
];

export default function AdminSidebar() {
  const currentPath = usePathname();
  const [activeRoute, setActiveRoute] = useState<string>(currentPath);

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <h2 className="flex items-center gap-2 font-roboto-flex text-lg font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <SettingsIcon />
          </span>
          Dashboard
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = activeRoute === item.path;
              return (
                <Link
                  href={{ pathname: item.path }}
                  key={item.id}
                  className={`cursor-pointer rounded-md p-2 text-lg text-white transition-colors duration-300 ${isActive ? 'bg-primary' : 'bg-transparent'}`}
                  onClick={() => setActiveRoute(item.path)}
                >
                  {item.label}
                </Link>
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
