import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';
import { ThemedView } from '../common/ThemedView';

interface CognitiveAreasListCardProps {
  user: UserCognitiveProfile;
}

type Trend = 'improving' | 'stable' | 'declining';

const TrendIndicatorMini = ({ trend }: { trend: Trend }) => {
  const color =
    trend === 'improving'
      ? 'text-green-500'
      : trend === 'declining'
      ? 'text-red-500'
      : 'text-yellow-500';

  const icon = trend === 'improving' ? '▲' : trend === 'declining' ? '▼' : '▬';
  return <ThemedText className={`font-bold ${color}`}>{icon}</ThemedText>;
};

export function CognitiveAreasListCard({ user }: CognitiveAreasListCardProps) {
  return (
    <ThemedCard>
      <ThemedText className='mb-3 text-lg font-semibold text-white'>
        Áreas Cognitivas
      </ThemedText>
      {user.cognitiveAreas.length > 0 ? (
        user.cognitiveAreas.map((area) => (
          <ThemedView
            key={area.id}
            className='flex-row items-center justify-between py-1 border-b border-zinc-700 last:border-b-0'
          >
            <ThemedText className='w-2/5 text-gray-300'>{area.name}</ThemedText>
            <ThemedText className='font-semibold text-white'>
              {area.score}
            </ThemedText>
            <TrendIndicatorMini trend={area.trend} />
          </ThemedView>
        ))
      ) : (
        <ThemedText className='text-gray-400'>
          No hay datos de áreas cognitivas.
        </ThemedText>
      )}
    </ThemedCard>
  );
}
