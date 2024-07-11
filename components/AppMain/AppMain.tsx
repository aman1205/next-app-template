'use client';
import { ReactNode, useEffect, useState } from 'react';
import { Box, Loader, Paper, useMantineColorScheme } from '@mantine/core';

type AppMainProps = {
  children: ReactNode;
};

const AppMain = ({ children }: AppMainProps) => {
  const [loaded, setLoaded] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setLoaded(true);
  }, [colorScheme]);

  if (!loaded) {
    return (
      <Paper
        component="div"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Loader color="blue" size="xl" type="dots" />
      </Paper>
    );
  }

  return (
    <Box py="lg" px="xl">
      {children}
    </Box>
  );
};

export default AppMain;
