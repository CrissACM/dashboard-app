import { Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { Card } from '../common/Card';
import { ThemedText } from '../ThemedText';

// Obtener el ancho de la pantalla para hacer el gráfico responsive
// Restaremos el padding de la ScrollView (px-4 -> 16*2=32) y el espacio entre cards (gap-4 -> 16 / 2 = 8 approx por lado)
const screenWidth = Dimensions.get('window').width;
const chartWidth = (screenWidth - 32 - 16) / 2; // Ancho para una card que ocupa la mitad

interface OverallTrendGraphCardProps {
  user: UserCognitiveProfile;
}

export function OverallTrendGraphCard({ user }: OverallTrendGraphCardProps) {
  // Normalizamos el score a un valor entre 0 y 1 para el ProgressChart
  const progressValue = user.overallScore / 100;

  const chartData = {
    // labels: ["Score"], // Opcional: puedes añadir etiquetas si tienes múltiples anillos
    data: [progressValue],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937', // zinc-800 (color de la Card)
    backgroundGradientTo: '#1f2937', // zinc-800
    color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`, // Color azul principal (ej: blue-600)
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
      // Estilo para las etiquetas si las usas
      fontSize: '10',
      color: '#9ca3af', // gray-400
    },
  };

  return (
    <Card className='items-center flex-1 py-3 mr-1'>
      {' '}
      {/* flex-1 y mr-1 para layout */}
      <ThemedText className='mb-2 font-semibold text-center text-white'>
        Puntuación Global
      </ThemedText>
      <ProgressChart
        data={chartData}
        width={chartWidth * 0.8} // Hacemos el gráfico un poco más pequeño que la card
        height={chartWidth * 0.7} // Ajusta la altura como necesites
        strokeWidth={12} // Grosor del anillo
        radius={chartWidth * 0.25} // Radio del anillo
        chartConfig={chartConfig}
        hideLegend={true} // Ocultamos la leyenda por defecto
      />
      {/* Mostramos el porcentaje numérico dentro o debajo */}
      <ThemedText className='mt-2 text-xl font-bold text-white'>
        {user.overallScore}%
      </ThemedText>
    </Card>
  );
}
