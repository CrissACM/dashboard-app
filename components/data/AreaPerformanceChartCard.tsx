import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';

interface AreaPerformanceChartCardProps {
  user: UserCognitiveProfile;
}

const screenWidth = Dimensions.get('window').width;
const chartFullWidth = screenWidth - 32;

const getColorByTrend = (
  trend: 'improving' | 'stable' | 'declining',
  opacity = 1,
) => {
  switch (trend) {
    case 'improving':
      return `rgba(34, 197, 94, ${opacity})`;
    case 'stable':
      return `rgba(234, 179, 8, ${opacity})`;
    case 'declining':
      return `rgba(239, 68, 68, ${opacity})`;
    default:
      return `rgba(59, 130, 246, ${opacity})`;
  }
};

export function AreaPerformanceChartCard({
  user,
}: AreaPerformanceChartCardProps) {
  const labels = user.cognitiveAreas.map((area) => area.name.substring(0, 3));
  const dataPoints = user.cognitiveAreas.map((area) => area.score);
  const barColors = user.cognitiveAreas.map(
    (area) =>
      (opacity = 1) =>
        getColorByTrend(area.trend, opacity),
  );

  if (labels.length === 0) {
    return (
      <ThemedCard>
        <ThemedText className='mb-2 font-semibold text-white'>
          Rendimiento por Área
        </ThemedText>
        <ThemedText className='text-gray-400'>
          No hay datos disponibles.
        </ThemedText>
      </ThemedCard>
    );
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
        colors: barColors,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937',
    backgroundGradientTo: '#1f2937',
    decimalPlaces: 0,
    barPercentage: 0.7,
    color: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`,
    propsForBackgroundLines: { stroke: '#374151', strokeWidth: 0.5 },
    propsForLabels: { fontSize: 10 },
    withCustomBarColorFromData: true,
  };

  return (
    <ThemedCard>
      <ThemedText className='my-3 font-semibold text-white'>
        Rendimiento por Área
      </ThemedText>
      <BarChart
        data={chartData}
        width={chartFullWidth * 0.95}
        height={200}
        chartConfig={chartConfig}
        style={{ borderRadius: 8, paddingRight: 10 }}
        withInnerLines={false}
        fromZero={true}
        showValuesOnTopOfBars={true}
        showBarTops={true}
        withHorizontalLabels={true}
        withVerticalLabels={true}
        yLabelsOffset={-5}
        yAxisSuffix=''
        yAxisLabel=''
      />
    </ThemedCard>
  );
}
