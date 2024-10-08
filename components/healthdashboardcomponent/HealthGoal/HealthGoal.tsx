'use client';
import { Text, Card, RingProgress, Group, useMantineTheme } from '@mantine/core';
import classes from './StatsRingCard.module.css';

const stats = [
  { value: 35, label: 'Remaining' },
  { value: 5, label: 'In progress' },
];

export function StatsRingCard() {
 
  const completed = 10;
  const total = 50;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={`flex flex-row ${classes.card}`} style={{ width: '400px' }}>
      <div className={`flex flex-row space-x-5 ${classes.inner}`}>
        <div>
          <Text fz="xl" className={classes.label}>
           Your Health Goal
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
            10
            </Text>
            <Text fz="xs" c="dimmed">
              Completed
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[{ value: (completed / total) * 100, color: "gray" }]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}