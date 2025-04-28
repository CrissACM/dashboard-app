import { Pressable, type PressableProps } from 'react-native';
import { ThemedText } from './ThemedText';

interface TagButtonProps extends PressableProps {
  label: string;
}

export function TagButton({ label, className, ...props }: TagButtonProps) {
  return (
    <Pressable
      className={`bg-green-500/80 py-1 px-3 rounded-md active:bg-green-600 ${
        className || ''
      }`}
      {...props}
    >
      <ThemedText className='text-xs font-medium text-white'>
        {label}
      </ThemedText>
    </Pressable>
  );
}
