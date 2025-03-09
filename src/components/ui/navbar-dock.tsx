import {
    HelpCircle,Component,HomeIcon,Mail,Package,ScrollText,SunMoon} from 'lucide-react';
  
  import { Dock, DockIcon, DockItem, DockLabel } from './dock'; 

  const data = [
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
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },

  ];
  
  export function NavbarDock() {
    return (
      <div className='absolute top-0 left-1/2 max-w-full -translate-x-1/2 mt-16'>
        <Dock className='items-end pb-3 py-4 pl-6'>
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-gray-600 dark:bg-neutral-800 mr-8'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    );
  }
  
