import { UserCognitiveProfile } from '../../data/mockUsers';
import { Card } from '../common/Card';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

enum Trend {
  Improving = 'improving',
  Stable = 'stable',
  Declining = 'declining',
}
// Reutilizamos el TrendIndicator de OverallSummaryCard o lo movemos a common/
const TrendIndicatorMini: React.FC<{
  trend: 'improving' | 'stable' | 'declining';
}> = ({ trend }) => {
  const color =
    trend === 'improving'
      ? 'text-green-500'
      : trend === 'declining'
      ? 'text-red-500'
      : 'text-yellow-500';
  const icon = trend === 'improving' ? '▲' : trend === 'declining' ? '▼' : '▬'; // Simple icons
  return <ThemedText className={`font-bold ${color}`}>{icon}</ThemedText>;
};

interface CognitiveAreasListCardProps {
  user: UserCognitiveProfile;
}

export function CognitiveAreasListCard({ user }: CognitiveAreasListCardProps) {
  return (
    <Card>
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
            {/* <ThemedText className="text-xs text-gray-400">{new Date(area.lastSessionDate).toLocaleDateString()}</ThemedText> */}
          </ThemedView>
        ))
      ) : (
        <ThemedText className='text-gray-400'>
          No hay datos de áreas cognitivas.
        </ThemedText>
      )}
    </Card>
  );
}
