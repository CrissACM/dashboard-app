import { router } from 'expo-router';
import { Avatar } from '../common/Avatar';
import { ThemedButton } from '../common/ThemedButton';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedView } from '../common/ThemedView';

interface ProfileHeaderCardProps {
  avatarUrl?: string;
  id: string;
}

export function ProfileHeaderCard({ avatarUrl, id }: ProfileHeaderCardProps) {
  return (
    <ThemedCard className='items-center px-0 mb-2 bg-transparent border-0'>
      <Avatar source={avatarUrl} size={100} />

      <ThemedView className='items-center w-full mt-6'>
        <ThemedView className='flex-row justify-between w-full'>
          <ThemedButton
            className='flex-1 w-full'
            color='tertiary'
            onPress={() => router.push(`/profile/data/${id}`)}
          >
            Información
          </ThemedButton>
        </ThemedView>
      </ThemedView>
    </ThemedCard>
  );
}
