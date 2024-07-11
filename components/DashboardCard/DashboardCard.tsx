import {
  Badge,
  Group,
  Stack,
  Text,
  useMantineTheme,
  useMantineColorScheme,
  Paper,
} from '@mantine/core';

interface DashboardCardProps {
  title: string;
  invested: string;
  current: string;
}

export default function DashboardCard({ title, invested, current }: DashboardCardProps) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Paper
      m={5}
      p="sm"
      radius="md"
      withBorder={true}
      shadow="lg"
      style={{ backgroundColor: colorScheme == 'dark' ? theme.colors.dark[5] : '' }}
    >
      <Text fw={'normal'} fz={20}>
        {title}
      </Text>
      <Group justify="space-between" m={2}>
        <Stack gap={0}>
          <Text>Invested</Text>
          <Text fs="700" fz={22}>
            {' '}
            {invested}
          </Text>
        </Stack>
        <Stack gap={0}>
          <Text>Current</Text>
          <Text fs="700" fz={22}>
            {current}
          </Text>
        </Stack>
      </Group>
      <Stack gap={2} m={2} p={2}>
        <Text>P&L</Text>
        <Badge bg={'green'} size="md">
          +0.79
        </Badge>
      </Stack>
    </Paper>
  );
}
