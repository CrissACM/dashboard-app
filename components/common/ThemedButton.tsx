import { Pressable, type PressableProps } from 'react-native';
import { ThemedText } from './ThemedText';

interface ButtonProps extends PressableProps {
  children: string;
  color: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
  className?: string;
}

export function ThemedButton({
  children,
  color,
  variant = 'contained',
  className,
  onPress,
  onLongPress,
}: ButtonProps) {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color];

  if (variant === 'text-only') {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <ThemedText className={`text-center ${textColor} font-work-medium`}>
          {children}
        </ThemedText>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`p-2 rounded-md ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <ThemedText className={`text-center ${textColor} font-work-medium`}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
