import { Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';

interface OverallTrendGraphCardProps {
  user: UserCognitiveProfile;
}

const screenWidth = Dimensions.get('window').width;
const chartWidth = (screenWidth - 32 - 16) / 2;

export function OverallTrendGraphCard({ user }: OverallTrendGraphCardProps) {
  const progressValue = user.overallScore / 100;

  const chartData = {
    labels: ['Score'],
    data: [progressValue],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937',
    backgroundGradientTo: '#1f2937',
    color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForLabels: {
      fontSize: '10',
      color: '#9ca3af',
    },
  };

  return (
    <ThemedCard className='items-center flex-1 py-3 mr-1'>
      <ThemedText className='mb-2 font-semibold text-center text-white'>
        Puntuación Global
      </ThemedText>
      <ProgressChart
        data={chartData}
        width={chartWidth * 0.8}
        height={chartWidth * 0.7}
        strokeWidth={12}
        radius={chartWidth * 0.25}
        chartConfig={chartConfig}
        hideLegend={true}
      />

      <ThemedText className='mt-2 text-xl font-bold text-white'>
        {user.overallScore}%
      </ThemedText>
    </ThemedCard>
  );
}
