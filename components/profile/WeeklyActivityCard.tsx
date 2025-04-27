import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit'; // Importar BarChart
import { UserCognitiveProfile } from '../../data/mockUsers';
import { Card } from '../common/Card';
import { ThemedText } from '../ThemedText';

// Ancho similar al otro gráfico
const screenWidth = Dimensions.get('window').width;
// Calculamos el ancho disponible para la card (considerando padding y gap)
const chartCardWidth = (screenWidth - 32 - 16) / 2;

/**
 * Función auxiliar para simular datos diarios a partir del total semanal.
 * (Se mantiene igual que antes)
 */
const generateWeeklyActivityData = (totalSessions: number): number[] => {
  if (totalSessions <= 0) return [0, 0, 0, 0, 0, 0, 0];
  const days = 7;
  let remainingSessions = totalSessions;
  const dailyData = Array(days).fill(0);
  const baseSessions = Math.floor(totalSessions / days);
  for (let i = 0; i < days; i++) {
    dailyData[i] = baseSessions;
    remainingSessions -= baseSessions;
  }
  let attempts = 0;
  while (remainingSessions > 0 && attempts < 50) {
    const randomIndex = Math.floor(Math.random() * days);
    dailyData[randomIndex]++;
    remainingSessions--;
    attempts++;
  }
  // Pequeña variación aleatoria adicional
  for (let i = 0; i < days; i++) {
    if (Math.random() > 0.6 && dailyData[i] > 0) {
      const move = Math.random() > 0.5 ? 1 : -1;
      const partnerIndex =
        (i + Math.floor(Math.random() * (days - 1)) + 1) % days;
      if (dailyData[partnerIndex] + move >= 0) {
        dailyData[i] -= move;
        dailyData[partnerIndex] += move;
      }
    }
  }
  return dailyData;
};

interface WeeklyActivityCardProps {
  user: UserCognitiveProfile;
}

export function WeeklyActivityCard({ user }: WeeklyActivityCardProps) {
  // Generamos los datos simulados para la semana
  const weeklyDataPoints = generateWeeklyActivityData(user.sessionsThisWeek);

  const chartData = {
    labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'], // Etiquetas cortas para los días
    datasets: [
      {
        data: weeklyDataPoints,
        // Puedes definir colores por barra si quieres aquí con colors: [(opacity=1) => ..., ...]
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937', // zinc-800
    backgroundGradientTo: '#1f2937', // zinc-800
    fillShadowGradient: `rgba(34, 197, 94, 1)`, // Color verde principal (green-500)
    fillShadowGradientOpacity: 0.8, // Opacidad del color de la barra
    decimalPlaces: 0, // No mostrar decimales
    barPercentage: 0.6, // Ancho relativo de las barras
    color: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`, // Color gris para ejes/etiquetas (gray-500)
    labelColor: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`, // Color gris para etiquetas (gray-400)
    style: {
      borderRadius: 8,
    },
    propsForBackgroundLines: {
      // Estilo de las líneas de fondo (eje Y)
      strokeWidth: 0.5, // Líneas más delgadas
      stroke: '#374151', // Color gris oscuro (gray-700)
    },
    propsForLabels: {
      fontSize: 10, // Tamaño de fuente más pequeño para etiquetas de día
    },
  };

  return (
    <Card className='items-center flex-1 py-3 ml-1'>
      {' '}
      {/* flex-1 y ml-1 para layout */}
      <ThemedText className='mb-2 font-semibold text-center text-white'>
        Actividad Semanal
      </ThemedText>
      <BarChart
        data={chartData}
        width={chartCardWidth * 0.95} // Ajusta el ancho para que quepa bien
        height={chartCardWidth * 0.7} // Ajusta la altura
        chartConfig={chartConfig}
        style={{
          borderRadius: 8,
        }}
        withInnerLines={false} // Ocultar líneas de grid internas
        fromZero={true} // Asegurar que el eje Y empiece en 0
        showValuesOnTopOfBars={false} // No mostrar valor encima de la barra (puede saturar)
        showBarTops={true} // Mostrar la parte superior de la barra plana
        withHorizontalLabels={true} // Mostrar etiquetas eje Y
        withVerticalLabels={true} // Mostrar etiquetas eje X (días)
        yAxisSuffix='' // Sufijo opcional para el eje Y
        yAxisLabel='' // Etiqueta del eje Y'
      />
      <ThemedText className='mt-1 text-xs text-gray-400'>
        Total: {user.sessionsThisWeek} sesiones
      </ThemedText>
    </Card>
  );
}
