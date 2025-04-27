import { UserCognitiveProfile } from '../../data/mockUsers';
import { Card } from '../common/Card';
import { TagButton } from '../common/TagButton';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

// Mapeo simple de ID a Nombre (puedes hacerlo más robusto)
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
    return null; // No mostrar la card si no hay recomendaciones
  }

  return (
    <Card>
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
    </Card>
  );
}
