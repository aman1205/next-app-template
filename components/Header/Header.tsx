import {
  Group,
  Burger,
  rem,
  Title,
  ThemeIcon,
  Button,
  Box,
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
  TextInput,
  Image,
  Avatar,
  Indicator,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch, IconSunFilled, IconMoonFilled, IconBell, IconUser } from '@tabler/icons-react';
import classes from './Header.module.css';

type HeaderNavProps = {
  mobileOpened?: boolean;
  toggleMobile?: () => void;
  desktopOpened?: boolean;
  toggleDesktop?: () => void;
};
export default function HeaderSearch(props: HeaderNavProps) {
  const { desktopOpened, toggleDesktop, toggleMobile, mobileOpened } = props;
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const laptop_match = useMediaQuery('(max-width: 992px)');
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const mobile_match = useMediaQuery('(max-width: 425px)');
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group className={classes.first}>
          <Group ml="lg">
            <Burger opened={mobileOpened} onClick={toggleMobile} size="sm" hiddenFrom="sm" />
            <Title order={1} className={classes.title} fz={25}>
              DASHBOARD
            </Title>
          </Group>

          {!mobile_match && (
            <Group className={classes.searchGroup}>
              <TextInput
                classNames={{ input: classes.input, section: classes.section }}
                placeholder="Search..."
                rightSection={<IconSearch size={rem(12)} stroke={0.8} opacity={0.8} />}
                radius={20}
                size="md"
                color="#fff"
              />
            </Group>
          )}
        </Group>

        {!mobile_match && (
          <Group className={classes.second}>
            <Group gap={'lg'}>
              <Group gap="xs" className={classes.switch}>
                <ActionIcon
                  variant="default"
                  size="xs"
                  radius={20}
                  className={classes.themeButton}
                  onClick={() => setColorScheme('dark')}
                >
                  <IconMoonFilled size={rem(8)} />
                </ActionIcon>
                <span>|</span>
                <ActionIcon
                  variant="default"
                  size="xs"
                  radius={20}
                  className={classes.themeButton}
                  onClick={() => setColorScheme('light')}
                >
                  <IconSunFilled size={rem(8)} />
                </ActionIcon>
              </Group>

              <Box>
                <Button
                  variant="light"
                  size="xl"
                  p={'sm'}
                  className={classes.btn}
                  bg={theme.colors.myButtonColor[9]}
                  c={'#fff'}
                  radius={40}
                >
                  Buy & Sell
                </Button>
              </Box>
            </Group>
            <Group gap="xl" mr={10}>
              <Indicator color="red" size={10} processing mt={8}>
                <IconBell stroke={2} className={classes.notification} />
              </Indicator>
              <ThemeIcon variant="transparent" radius={100}>
                <Avatar
                  radius={100}
                  size={30}
                  src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/ORP/B4034D5B-B9CD-0FDA-A4A4B94A79E70949.jpg"
                />
              </ThemeIcon>
            </Group>
          </Group>
        )}
      </div>
    </header>
  );
}
