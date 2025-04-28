import { Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { TagButton } from '../common/TagButton';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';
import { ThemedView } from '../common/ThemedView';

interface OverallProgressCardProps {
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
  return (
    <ThemedText className={`font-semibold ${color} text-sm`}>{text}</ThemedText>
  );
};

const areaIdToName = (id: string): string => {
  const map: { [key: string]: string } = {
    memory: 'Memoria',
    attention: 'Atención',
    speed: 'Velocidad',
    logic: 'Lógica',
    language: 'Lenguaje',
    spatial: 'Visuoespacial',
  };

  return map[id] || id;
};

const donutChartWidth = Dimensions.get('window').width / 3;

export function OverallProgressCard({ user }: OverallProgressCardProps) {
  const progressValue = user.overallScore / 100;
  const chartData = { data: [progressValue] };
  const recommendations = user.recommendedAreaIds || [];

  const chartConfig = {
    backgroundGradientFrom: '#1f2937',
    backgroundGradientTo: '#1f2937',
    color: (opacity = 1) => {
      return `rgba(34, 197, 94, ${opacity})`;
    },
    strokeWidth: 2,
  };

  return (
    <ThemedCard>
      <ThemedView className='flex-row items-start justify-between'>
        <ThemedView className='items-center w-1/2 pr-2'>
          <ThemedText className='mb-2 font-semibold text-white'>
            Progreso General
          </ThemedText>

          <ProgressChart
            data={chartData}
            width={donutChartWidth}
            height={donutChartWidth * 0.8}
            strokeWidth={10}
            radius={donutChartWidth * 0.3}
            chartConfig={chartConfig}
            hideLegend={true}
          />

          {recommendations.length > 0 && (
            <ThemedView className='flex-row flex-wrap justify-center gap-1 mt-3'>
              {recommendations.map((id) => (
                <TagButton
                  key={id}
                  label={areaIdToName(id)}
                  className='bg-blue-600/80 active:bg-blue-700 text-xs px-2 py-0.5'
                />
              ))}
            </ThemedView>
          )}
        </ThemedView>

        <ThemedView className='items-end w-1/2 pt-8 pl-2'>
          <ThemedText className='mb-1 text-2xl font-bold text-white'>
            {user.overallScore}%
          </ThemedText>
          <TrendIndicator trend={user.overallTrend} />
          <ThemedText className='mt-1 text-xs text-right text-gray-400'>
            Tendencia vs. Semana Pasada
          </ThemedText>

          <ThemedText className='mt-3 text-xs text-gray-400'>
            Última Actividad: {new Date(user.lastActive).toLocaleDateString()}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedCard>
  );
}
