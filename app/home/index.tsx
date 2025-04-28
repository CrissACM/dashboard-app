import { ThemedView } from '@/components/common/ThemedView';
import { UserListItem } from '@/components/home/UserListItem';
import { mockUsersData } from '@/data/mockUsers';
import { FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={{ marginTop: 5 }}>
      <FlatList
        data={mockUsersData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserListItem
            id={item.id}
            name={item.name}
            avatarUrl={item.avatarUrl}
          />
        )}
      />
    </ThemedView>
  );
}
