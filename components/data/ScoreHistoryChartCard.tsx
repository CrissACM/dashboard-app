import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';
import { ThemedView } from '../common/ThemedView';

interface ScoreHistoryChartCardProps {
  user: UserCognitiveProfile;
}

const chartFullWidthHist = Dimensions.get('window').width - 32;

const simulateHistoricalScores = (
  currentScore: number,
  trend: string,
  numPoints = 5,
): number[] => {
  if (numPoints <= 0) return [];
  if (numPoints === 1) return [currentScore];

  const history = Array(numPoints).fill(0);
  history[numPoints - 1] = currentScore;

  for (let i = numPoints - 2; i >= 0; i--) {
    const nextScore = history[i + 1];

    let baseChange = 0;

    if (trend === 'improving') {
      baseChange = -2;
    } else if (trend === 'declining') {
      baseChange = 2;
    }

    const noise = (Math.random() - 0.5) * 4;
    const simulatedPreviousScore = nextScore + baseChange + noise;

    history[i] = Math.max(0, Math.min(100, Math.round(simulatedPreviousScore)));
  }

  return history;
};

export function ScoreHistoryChartCard({ user }: ScoreHistoryChartCardProps) {
  const historicalScores = simulateHistoricalScores(
    user.overallScore,
    user.overallTrend,
    5,
  );
  const labels = ['S-4', 'S-3', 'S-2', 'S-1', 'Act'];

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: historicalScores,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937',
    backgroundGradientTo: '#1f2937',
    fillShadowGradient: `rgba(139, 92, 246, 1)`,
    fillShadowGradientOpacity: 0.8,
    decimalPlaces: 0,
    barPercentage: 0.7,
    color: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`,
    propsForBackgroundLines: { stroke: '#374151', strokeWidth: 0.5 },
    propsForLabels: { fontSize: 10 },
  };

  return (
    <ThemedCard>
      <ThemedView className='flex-row items-center justify-between my-3'>
        <ThemedText className='font-semibold text-white'>
          Historial de Puntuación
        </ThemedText>
      </ThemedView>

      <BarChart
        data={chartData}
        width={chartFullWidthHist * 0.95}
        height={200}
        chartConfig={chartConfig}
        style={{ borderRadius: 8, paddingRight: 10 }}
        withInnerLines={false}
        fromZero={true}
        showValuesOnTopOfBars={false}
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
