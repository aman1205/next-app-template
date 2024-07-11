'use client';
import DashboardCard from '@/components/DashboardCard/DashboardCard';
import PerformanceChart from '@/components/PerformanceChart/PerformanceChart';
import Watchlist from '@/components/Watchlist/Watchlist';
import { Grid } from '@mantine/core';
import Trending from '@/components/Trending/Trending';
import Layout from '@/components/Layout/Layout';
export default function Dashboard() {
  return (
    <>
      <Layout>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DashboardCard title="Conservative" invested="$52,000" current="$52,395"  />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DashboardCard title="Moderate" invested="$40,000" current="$39,632" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DashboardCard title="Aggressive" invested="$52,000" current="$52,395" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <DashboardCard title="Manual" invested="$40,000" current="$39,632" />
          </Grid.Col>
        </Grid>
        <Grid gutter="md" mt="sm">
          <Grid.Col span={{ base: 12, md: 12, lg: 9 }}>
            <PerformanceChart />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 12, lg: 3 }}>
            <Watchlist />
          </Grid.Col>
        </Grid>
        <Trending />
      </Layout>
    </>
  );
}
