import { useState } from 'react';
import { Group, Title, ActionIcon, Tooltip } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconSettings,
  IconLogout2,
  IconLayoutDashboard,
  IconArrowsDownUp,
  IconHexagons,
  IconMailHeart,
  IconReceipt2,
} from '@tabler/icons-react';
import classes from './Sidebar.module.css';
import Link from 'next/link';

const data = [
  { link: '/', label: 'Dashboard', icon: IconLayoutDashboard },
  { link: '/portfolio', label: 'Portfolio', icon: IconReceipt2 },
  { link: '/member', label: 'Membership and Services', icon: IconMailHeart },
  { link: '/stock', label: 'Buy & Sell', icon: IconArrowsDownUp },
  { link: '/knowledge', label: 'Knowledge Base', icon: IconHexagons },
];

type SidebarProps = {
  mobileOpened?: boolean;
  toggleMobile?: () => void;
  desktopOpened?: boolean;
  toggleDesktop?: () => void;
};

export default function Sidebar(props: SidebarProps) {
  const { desktopOpened, toggleDesktop, toggleMobile, mobileOpened } = props;
  const [active, setActive] = useState('Dashboard');
  const theme = useMantineTheme();
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} color="#fff" />
      <span>{item.label}</span>
    </Link>
  ));
  const sidebarStyle = {
    backgroundColor: theme.colors.myPrimaryColor[9],
    color: '#fff',
  };

  return (
    <nav className={classes.navbar} style={sidebarStyle}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Title order={1} style={{ margin: 0 }}>
            Logo
          </Title>
          <Tooltip label="Toggle side navigation">
            <ActionIcon
              onClick={toggleDesktop}
              bg={'none'}
              style={{
                position: 'absolute',
                top: '25px',
                right: desktopOpened ? '20px' : '-35px',
                zIndex: 1000,
                backgroundColor: `${desktopOpened ? 'transparent' : 'rgba(0,0,0,0.5)'}`,
              }}
            >
              {desktopOpened ? <IconLayoutSidebarLeftCollapse /> : <IconLayoutSidebarLeftExpand />}
            </ActionIcon>
          </Tooltip>
        </Group>
        {links}
      </div>
      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Setting</span>
        </a>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout2 className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
