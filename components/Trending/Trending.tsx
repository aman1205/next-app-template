import {
  Avatar,
  Button,
  Group,
  Paper,
  ScrollArea,
  Table,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { elements } from './elements';
import classes from '@/components/Watchlist/WatchItemList.module.css';
export default function Demo() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const rows = elements.map((element) => (
    <Table.Tr key={element.id} h={30} c={
      colorScheme == 'dark' ? theme.colors.dark[1] : theme.colors.gray[9]
    }
    fw={600}>
      <Table.Td>
        {
          <Group gap={'sm'}>
            <Avatar src={element.icon} radius={200} size={20} bg={'blue'} />
            <div>
              <Text size="sm" fw={600}>
                {element.name}
              </Text>
            </div>
          </Group>
        }
      </Table.Td>
      <Table.Td>{element.price}</Table.Td>
      <Table.Td c={element.change > 0 ? theme.colors.green[6] : theme.colors.red[6]}>
        {element.change > 0 ? '+' : ''}
        {element.change}%
      </Table.Td>

      <Table.Td>{element.cap}</Table.Td>
      <Table.Td>
        <Button size="md" radius={40} bg={theme.colors.myButtonColor[9]}>
          Buy
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper
      shadow="md"
      p={'sm'}
      radius="md"
      h={220}
      mt={20}
      style={{
        backgroundColor: colorScheme == 'dark' ? theme.colors.contentBackground[0] : '#fff',
      }}
    >
      <Text size="lg" p={4} fw={400} fz={20}>
        Trending Market
      </Text>
      <ScrollArea type="always" h={140} classNames={classes}>
        <Table withRowBorders={false} highlightOnHover horizontalSpacing={60}>
          <Table.Thead bd={4}>
            <Table.Tr>
              <Table.Th>Coin</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>24h change</Table.Th>
              <Table.Th>Market Cap</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
