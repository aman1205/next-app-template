'use client';
import {
  AppShell,
  rem,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import { ReactNode } from 'react';
import AppMain from '../AppMain/AppMain';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding={0}
    >
      <AppShell.Header
        style={{
          height: rem(60),
          border: 'none',
        }}
      >
        <Header
          desktopOpened={desktopOpened}
          mobileOpened={mobileOpened}
          toggleDesktop={toggleDesktop}
          toggleMobile={toggleMobile}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar
          desktopOpened={desktopOpened}
          mobileOpened={mobileOpened}
          toggleDesktop={toggleDesktop}
          toggleMobile={toggleMobile}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <AppMain>{children}</AppMain>
      </AppShell.Main>
    </AppShell>
  );
}
