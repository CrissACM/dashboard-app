import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';
import { ThemedView } from '../common/ThemedView';

const chartFullWidthHist = Dimensions.get('window').width - 32;

/**
 * Función para simular puntajes históricos basados en el puntaje y tendencia actual.
 * ¡SOLO PARA VISUALIZACIÓN!
 */
const simulateHistoricalScores = (
  currentScore: number,
  trend: string,
  numPoints = 5,
): number[] => {
  const history = Array(numPoints).fill(0);
  history[numPoints - 1] = currentScore; // El último punto es el actual

  let step = 0;
  if (trend === 'improving') step = -3; // Venía de más bajo
  if (trend === 'declining') step = 3; // Venía de más alto

  for (let i = numPoints - 2; i >= 0; i--) {
    const randomFactor = (Math.random() - 0.5) * 4; // +/- 2 puntos de ruido
    history[i] = Math.max(
      0,
      Math.min(100, Math.round(history[i + 1] + step + randomFactor)),
    ); // Calcula el anterior + ruido
    // Asegura que el paso se mantenga más o menos
    if (trend === 'improving' && history[i] >= history[i + 1])
      history[i] = history[i + 1] - Math.abs(step / 2 + randomFactor);
    if (trend === 'declining' && history[i] <= history[i + 1])
      history[i] = history[i + 1] + Math.abs(step / 2 + randomFactor);
    history[i] = Math.max(0, Math.min(100, Math.round(history[i]))); // Clamp again
  }
  return history;
};

interface ScoreHistoryChartCardProps {
  user: UserCognitiveProfile;
}

export function ScoreHistoryChartCard({ user }: ScoreHistoryChartCardProps) {
  const historicalScores = simulateHistoricalScores(
    user.overallScore,
    user.overallTrend,
    5,
  ); // 5 puntos históricos
  const labels = ['S-4', 'S-3', 'S-2', 'S-1', 'Act']; // Etiquetas de semanas/actual

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: historicalScores,
        // Usaremos un color fijo para estas barras (ej: azul/púrpura)
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937', // zinc-800
    backgroundGradientTo: '#1f2937',
    fillShadowGradient: `rgba(139, 92, 246, 1)`, // violet-500
    fillShadowGradientOpacity: 0.8,
    decimalPlaces: 0,
    barPercentage: 0.7,
    color: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`, // gray-500
    labelColor: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`, // gray-400
    propsForBackgroundLines: { stroke: '#374151', strokeWidth: 0.5 }, // gray-700
    propsForLabels: { fontSize: 10 },
  };

  return (
    <ThemedCard>
      <ThemedView className='flex-row items-center justify-between mb-3'>
        <ThemedText className='font-semibold text-white'>
          Historial de Puntuación
        </ThemedText>
        {/* Podríamos poner la tendencia aquí también si quisiéramos */}
        {/* <TrendIndicator trend={user.overallTrend} /> */}
      </ThemedView>
      <BarChart
        data={chartData}
        width={chartFullWidthHist * 0.95}
        height={200}
        chartConfig={chartConfig}
        style={{ borderRadius: 8, paddingRight: 10 }}
        withInnerLines={false}
        fromZero={true}
        showValuesOnTopOfBars={false} // Ocultar valores para no saturar
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
