import { useState } from 'react';
import {
  Text,
  Paper,
  ScrollArea,
  Badge,
  useMantineTheme,
  useMantineColorScheme,
  TextInput,
  rem,
  Box,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { WatchlistItem } from './WatchItemList';
import classes from './WatchItemList.module.css';
import {data} from './data';


export default function Watchlist() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [search, setSearch] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper
      shadow="md"
      p="lg"
      radius="md"
      style={{
        backgroundColor: colorScheme === 'dark' ? theme.colors.contentBackground[0] : theme.white,
      }}
      h={360}
    >
      <Text size="md" p={4} fw={500} fz={22}>
        Watchlist
      </Text>
      <Box className={classes.wrapperItem}>
        <WatchlistItem
          icon={data[0].icon}
          name={data[0].name}
          symbol={data[0].symbol}
          price={data[0].price}
          change={data[0].change}
        />
        <WatchlistItem
          icon={data[1].icon}
          name={data[1].name}
          symbol={data[1].symbol}
          price={data[1].price}
          change={data[1].change}
        />
      </Box>
      <TextInput
        classNames={{ input: classes.input, section: classes.section }}
        placeholder="Search..."
        rightSection={<IconSearch size={rem(8)} stroke={0.6} opacity={0.8} />}
        radius={20}
        size="sm"
        color="#fff"
      />
      <ScrollArea
        style={{ height: 150 }}
        type="always"
        offsetScrollbars
        classNames={classes}
        scrollbarSize={12}
      >
        {filteredData.map((item, index) => (
          <WatchlistItem
            key={index}
            icon={item.icon}
            name={item.name}
            symbol={item.symbol}
            price={item.price}
            change={item.change}
          />
        ))}
      </ScrollArea>
    </Paper>
  );
}
