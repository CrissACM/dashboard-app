import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';
import { ThemedView } from '../common/ThemedView';

interface OverallSummaryCardProps {
  user: UserCognitiveProfile;
}

type Trend = 'improving' | 'stable' | 'declining';

const TrendIndicator = ({ trend }: { trend: Trend }) => {
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
    <ThemedCard>
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
    </ThemedCard>
  );
}
