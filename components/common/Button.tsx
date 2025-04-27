import { Pressable, type PressableProps } from 'react-native';
import { ThemedText } from '../ThemedText';

interface ButtonProps extends PressableProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export function Button({
  title,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    'py-2 px-5 rounded-md items-center justify-center active:opacity-80';
  const variantClasses = variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600';

  const textClasses = 'text-white font-semibold';

  return (
    <Pressable
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      {...props}
    >
      <ThemedText className={textClasses}>{title}</ThemedText>
    </Pressable>
  );
}
