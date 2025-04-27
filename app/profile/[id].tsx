// app/profile.tsx
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

// Importa los datos y tipos
import { mockUsersData, UserCognitiveProfile } from '../../data/mockUsers'; // Ajusta la ruta

// Importa los NUEVOS componentes específicos del perfil cognitivo
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CognitiveAreasListCard } from '../../components/profile/CognitiveAreasListCard'; // Nuevo
import { OverallSummaryCard } from '../../components/profile/OverallSummaryCard'; // Nuevo
import { OverallTrendGraphCard } from '../../components/profile/OverallTrendGraphCard'; // Nuevo Placeholder
import { ProfileHeaderCard } from '../../components/profile/ProfileHeaderCard'; // Se mantiene
import { RecommendationsCard } from '../../components/profile/RecommendationsCard'; // Nuevo
import { WeeklyActivityCard } from '../../components/profile/WeeklyActivityCard'; // Nuevo Placeholder

// const SafeAreaView = styled(SafeAreaView);
// const ScrollView = styled(ScrollView);

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [user, setUser] = useState<UserCognitiveProfile | null | undefined>(
    undefined,
  );

  useEffect(() => {
    setUser(undefined); // Resetear estado para mostrar carga en cambio de usuario
    if (id) {
      const foundUser = mockUsersData.find((u) => u.id === id);
      setTimeout(() => {
        // Simular carga
        setUser(foundUser || null);
      }, 300);
    } else {
      setUser(null);
    }
  }, [id]);

  if (user === undefined) {
    return <ActivityIndicator size='large' color='#FFFFFF' />;
  }

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
      {/* Card del Header (Nombre y Avatar) */}
      <ProfileHeaderCard name={user.name} avatarUrl={user.avatarUrl} />

      {/* Contenedor para las cards con espacio entre ellas */}
      <ThemedView className='space-y-4'>
        <OverallSummaryCard user={user} />
        <CognitiveAreasListCard user={user} />
        <RecommendationsCard user={user} />

        {/* Fila para los dos gráficos */}
        <ThemedView className='flex-row justify-between'>
          {/* Asegúrate de pasar el 'user' a ambos */}
          <OverallTrendGraphCard user={user} />
          <WeeklyActivityCard user={user} />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
