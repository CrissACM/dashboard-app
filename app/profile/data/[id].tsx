import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';

import { mockUsersData } from '../../../data/mockUsers';

import { ThemedText } from '@/components/common/ThemedText';
import { ThemedView } from '@/components/common/ThemedView';
import { AreaPerformanceChartCard } from '../../../components/data/AreaPerformanceChartCard';
import { OverallProgressCard } from '../../../components/data/OverallProgressCard';
import { ScoreHistoryChartCard } from '../../../components/data/ScoreHistoryChartCard';

export default function DataScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const user = mockUsersData.find((user) => user.id === id);

  if (!user) {
    return (
      <ThemedView className='items-center justify-center p-4'>
        <ThemedText className='text-lg text-red-500'>
          User data not available.
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView
      className='flex-1 px-4 pt-2'
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <ThemedView className='gap-y-5'>
        <AreaPerformanceChartCard user={user} />

        <OverallProgressCard user={user} />

        <ScoreHistoryChartCard user={user} />
      </ThemedView>
    </ScrollView>
  );
}
