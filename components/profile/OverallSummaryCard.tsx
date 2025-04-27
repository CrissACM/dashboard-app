import { UserCognitiveProfile } from '../../data/mockUsers'; // Importar el tipo
import { Card } from '../common/Card';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

// Componente auxiliar para mostrar tendencia con color

interface OverallSummaryCardProps {
  user: UserCognitiveProfile;
}

const TrendIndicator: React.FC<{
  trend: 'improving' | 'stable' | 'declining';
}> = ({ trend }) => {
  const color =
    trend === 'improving'
      ? 'text-green-400'
      : trend === 'declining'
      ? 'text-red-400'
      : 'text-yellow-400';
  const text = trend.charAt(0).toUpperCase() + trend.slice(1);
  return <ThemedText className={`font-semibold ${color}`}>{text}</ThemedText>;
};

export function OverallSummaryCard({ user }: OverallSummaryCardProps) {
  const lastActiveDate = new Date(user.lastActive).toLocaleDateString();

  return (
    <Card>
      <ThemedText className='mb-3 text-lg font-semibold text-white'>
        Resumen General
      </ThemedText>
      <ThemedView className='flex-row items-center justify-between mb-2'>
        <ThemedText className='text-gray-300'>Puntuación Global:</ThemedText>
        <ThemedText className='text-xl font-bold text-white'>
          {user.overallScore}
        </ThemedText>
      </ThemedView>
      <ThemedView className='flex-row items-center justify-between mb-2'>
        <ThemedText className='text-gray-300'>Tendencia General:</ThemedText>
        <TrendIndicator trend={user.overallTrend} />
      </ThemedView>
      <ThemedView className='flex-row items-center justify-between mb-2'>
        <ThemedText className='text-gray-300'>Sesiones (Semana):</ThemedText>
        <ThemedText className='font-medium text-white'>
          {user.sessionsThisWeek}
        </ThemedText>
      </ThemedView>
      <ThemedView className='flex-row items-center justify-between'>
        <ThemedText className='text-gray-300'>Última Actividad:</ThemedText>
        <ThemedText className='font-medium text-white'>
          {lastActiveDate}
        </ThemedText>
      </ThemedView>
    </Card>
  );
}
