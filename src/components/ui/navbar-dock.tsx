"use client";

import {
    HelpCircle,Component,HomeIcon,Mail,Package,ScrollText,SunMoon} from 'lucide-react';
import Link from 'next/link';
  
import { Dock, DockIcon, DockItem, DockLabel } from './dock'; 
import { ThemeToggle } from './theme-toggle';

interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  isThemeToggle?: boolean;
}

const navItems: NavItem[] = [
  {
    title: 'Anasayfa',
    icon: <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: '/',
  },
  {
    title: 'Hakkımda',
    icon: <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: '/about',
  },
  {
    title: 'Projelerim',
    icon: <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: '/projects',
  },
  {
    title: 'Blog & Makaleler',
    icon: <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: '/blogs-articles',
  },
  {
    title: 'İletişim',
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: '/contact',
  },
  {
    title: 'Sıkça Sorulan Sorular',
    icon: <HelpCircle className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: '/faq',
  },
  {
    title: 'Tema',
    icon: <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '#',
    isThemeToggle: true,
  },
];

export function NavbarDock() {
  return (
    <div className='absolute top-0 left-1/2 max-w-full -translate-x-1/2 mt-16'>
      <Dock className='items-end pb-3 py-4 pl-6'>
        {navItems.map((item, idx) => (
          item.isThemeToggle ? (
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-gray-600 dark:bg-neutral-800 mr-8 cursor-pointer'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>
                <ThemeToggle />
              </DockIcon>
            </DockItem>
          ) : (
            <Link href={item.href} key={idx} className="no-underline">
              <DockItem
                className='aspect-square rounded-full bg-gray-600 dark:bg-neutral-800 mr-8 cursor-pointer'
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          )
        ))}
      </Dock>
    </div>
  );
}
  
