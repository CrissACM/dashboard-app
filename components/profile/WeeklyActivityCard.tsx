import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { UserCognitiveProfile } from '../../data/mockUsers';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';

interface WeeklyActivityCardProps {
  user: UserCognitiveProfile;
}

const screenWidth = Dimensions.get('window').width;
const chartCardWidth = (screenWidth - 32 - 16) / 2;

const generateWeeklyActivityData = (totalSessions: number): number[] => {
  if (totalSessions <= 0) {
    return Array(7).fill(0);
  }

  const days = 7;
  const dailyData = Array(days).fill(0);

  for (let i = 0; i < totalSessions; i++) {
    const randomIndex = Math.floor(Math.random() * days);

    dailyData[randomIndex]++;
  }

  return dailyData;
};

export function WeeklyActivityCard({ user }: WeeklyActivityCardProps) {
  const weeklyDataPoints = generateWeeklyActivityData(user.sessionsThisWeek);

  const chartData = {
    labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    datasets: [
      {
        data: weeklyDataPoints,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1f2937',
    backgroundGradientTo: '#1f2937',
    fillShadowGradient: `rgba(34, 197, 94, 1)`,
    fillShadowGradientOpacity: 0.8,
    decimalPlaces: 0,
    barPercentage: 0.6,
    color: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`,
    style: {
      borderRadius: 8,
    },
    propsForBackgroundLines: {
      strokeWidth: 0.5,
      stroke: '#374151',
    },
    propsForLabels: {
      fontSize: 10,
    },
  };

  return (
    <ThemedCard className='items-center flex-1 py-3 ml-1'>
      <ThemedText className='mb-2 font-semibold text-center text-white'>
        Actividad Semanal
      </ThemedText>
      <BarChart
        data={chartData}
        width={chartCardWidth * 0.95}
        height={chartCardWidth * 0.7}
        chartConfig={chartConfig}
        style={{
          borderRadius: 8,
          paddingLeft: 14,
          paddingRight: 14,
        }}
        withInnerLines={false}
        fromZero={true}
        showValuesOnTopOfBars={false}
        showBarTops={true}
        withHorizontalLabels={true}
        withVerticalLabels={true}
        yAxisSuffix=''
        yAxisLabel=''
        yLabelsOffset={0}
      />
      <ThemedText className='mt-1 text-xs text-gray-400'>
        Total: {user.sessionsThisWeek} sesiones
      </ThemedText>
    </ThemedCard>
  );
}
