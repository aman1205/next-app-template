import { useMantineTheme, Group, Avatar, Text, Box, Stack, useMantineColorScheme } from '@mantine/core';

interface WatchlistItemProps {
  icon: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
}

export const WatchlistItem: React.FC<WatchlistItemProps> = ({
  icon,
  name,
  symbol,
  price,
  change,
}) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const changeColor = change > 0 ? theme.colors.green[6] : theme.colors.red[6];
  return (
    <Stack justify="center">
      <Group justify="space-between" __size={50} p={2} 
        c={
          colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[9]
        }
      >
        <Group gap={'xs'}>
          <Avatar src={icon} radius={100} size={20} bg={'blue'} />
          <Text size="sm" fw={600}>
            {name}
          </Text>
        </Group>
        <Stack gap={'xs'}>
          <Text size="sm" fw={500}>
            ${price.toLocaleString()}
          </Text>
          <Text size="xs" color={changeColor} ta={'right'} mr={0} fz={10}>
            {change > 0 ? '+' : ''}
            {change}%
          </Text>
        </Stack>
      </Group>
    </Stack>
  );
};
