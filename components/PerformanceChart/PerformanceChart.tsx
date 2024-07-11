import { LineChart } from '@mantine/charts';
import {
  useMantineTheme,
  useMantineColorScheme,
  Paper,
  Text,
  Group,
  Button,
} from '@mantine/core';
import { data } from './data';
import '@mantine/charts/styles.css';
import { IconArrowDown } from '@tabler/icons-react';

export default function PerformanceChart() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const getColor = (color: any) => {
    return theme.colors[color] ? theme.colors[color][6] : color;
  };

  return (
    <Paper
      shadow="md"
      p="md"
      radius="md"
      style={{
        backgroundColor: colorScheme === 'dark' ? theme.colors.contentBackground[0] : '#fff',
      }}
    >
      <Group justify="space-between">
        <Text size="lg" fw={600}>
          Allocation Performance Chart
        </Text>
        <Button
          variant="outline"
          radius="md"
          size="sm"
          rightSection={<IconArrowDown size={14} />}
          bg={theme.colors.myButtonColor[9]}
          c={'#fff'}
        >
          3 months
        </Button>
      </Group>
      <Group justify="space-between">
        <Text size="xl" fw={700} style={{ marginBottom: theme.spacing.md }}>
          $35,352.02
        </Text>
      </Group>
      <LineChart
        h={250}
        w="100%"
        data={data}
        dataKey="date"
        withLegend
        series={[
          { name: 'Conservative', color: getColor('green') },
          { name: 'Moderate', color: getColor('yellow') },
          { name: 'Aggressive', color: getColor('purple') },
        ]}
        curveType="natural"
        tickLine="none"
        gridAxis="none"
        withDots={false}
        xAxisProps={{
          tick: {
            fill: colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[7],
          },
          axisLine: {
            stroke: colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[7],
          },
        }}
        yAxisProps={{
          tick: {
            fill: colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[7],
          },
        }}
      />
    </Paper>
  );
}
