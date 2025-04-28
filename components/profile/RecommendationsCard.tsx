import { UserCognitiveProfile } from '../../data/mockUsers';
import { TagButton } from '../common/TagButton';
import { ThemedCard } from '../common/ThemedCard';
import { ThemedText } from '../common/ThemedText';
import { ThemedView } from '../common/ThemedView';

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

interface RecommendationsCardProps {
  user: UserCognitiveProfile;
}

export function RecommendationsCard({ user }: RecommendationsCardProps) {
  const recommendations = user.recommendedAreaIds || [];

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <ThemedCard>
      <ThemedText className='mb-3 text-lg font-semibold text-white'>
        Áreas Recomendadas
      </ThemedText>
      <ThemedView className='flex-row flex-wrap gap-2'>
        {recommendations.map((id) => (
          <TagButton
            key={id}
            label={areaIdToName(id)}
            className='bg-blue-600/80 active:bg-blue-700'
          />
        ))}
      </ThemedView>
    </ThemedCard>
  );
}
