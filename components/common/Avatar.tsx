import { Ionicons } from '@expo/vector-icons';
import { Image, ImageSourcePropType } from 'react-native';
import { StatusDot } from './StatusDot';
import { ThemedView } from './ThemedView';

interface AvatarProps {
  source?: ImageSourcePropType | string;
  size?: number;
  showStatus?: boolean;
  statusColor?: string;
}

export function Avatar({
  source,
  size = 80,
  showStatus = true,
  statusColor = 'bg-green-500',
}: AvatarProps) {
  const imageSource = typeof source === 'string' ? { uri: source } : source;
  const imageSizeClass = `w-${size / 4} h-${size / 4}`;
  const statusPosition = `-${size / (4 * 5)} right-${size / (4 * 10)}`;

  return (
    <ThemedView className='relative'>
      {imageSource ? (
        <Image
          source={imageSource}
          className={`rounded-full bg-zinc-600 ${imageSizeClass}`}
          style={{ width: size, height: size }}
          resizeMode='cover'
        />
      ) : (
        <Ionicons
          className={`rounded-full bg-zinc-600 ${imageSizeClass}`}
          size={size}
          name='person-circle-outline'
          color='white'
          style={{ width: size, height: size }}
        />
      )}
      {showStatus && (
        <ThemedView
          className={`absolute bottom-0 rounded-full right-0 ${statusPosition}`}
        >
          <StatusDot color={statusColor} size={size / 5} />
        </ThemedView>
      )}
    </ThemedView>
  );
}
