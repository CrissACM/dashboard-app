import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { mockUsersData } from '../../data/mockUsers';

import { ThemedText } from '@/components/common/ThemedText';
import { ThemedView } from '@/components/common/ThemedView';
import { CognitiveAreasListCard } from '@/components/profile/CognitiveAreasListCard';
import { OverallSummaryCard } from '@/components/profile/OverallSummaryCard';
import { OverallTrendGraphCard } from '@/components/profile/OverallTrendGraphCard';
import { ProfileHeaderCard } from '@/components/profile/ProfileHeaderCard';
import { RecommendationsCard } from '@/components/profile/RecommendationsCard';
import { WeeklyActivityCard } from '@/components/profile/WeeklyActivityCard';

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const user = mockUsersData.find((user) => user.id === id);

  useEffect(() => {
    navigation.setOptions({ title: user?.name ?? 'User' });
  }, [user]);

  if (!user) {
    return (
      <ThemedText className='text-lg text-red-500'>User not found.</ThemedText>
    );
  }

  return (
    <ScrollView
      className='flex-1 px-4 pt-2'
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <ProfileHeaderCard avatarUrl={user.avatarUrl} id={user.id} />

      <ThemedView className='gap-4'>
        <OverallSummaryCard user={user} />
        <CognitiveAreasListCard user={user} />
        <RecommendationsCard user={user} />

        <ThemedView className='flex-row justify-between'>
          <OverallTrendGraphCard user={user} />
          <WeeklyActivityCard user={user} />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
