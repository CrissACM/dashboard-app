import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable } from 'react-native';
import { ThemedText } from './ThemedText';

interface UserListItemProps {
  id: string;
  name: string;
  avatarUrl?: string;
}

export function UserListItem({ id, name, avatarUrl }: UserListItemProps) {
  return (
    <Pressable
      className='flex-row items-center p-4 active:bg-gray-700'
      onPress={() => router.push(`/profile/${id}`)}
    >
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          className='mr-4 bg-gray-500 w-11 h-11 rounded-3xl'
          resizeMode='cover'
        />
      ) : (
        <Ionicons
          name='person-circle-outline'
          size={39}
          color='white'
          className='mr-4 text-white bg-gray-500 rounded-full w-11 h-11'
        />
      )}

      <ThemedText>{name}</ThemedText>
    </Pressable>
  );
}
