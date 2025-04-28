import { ViewProps } from 'react-native';
import { ThemedView } from './ThemedView';

interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export function ThemedCard({ children, className, ...props }: CardProps) {
  return (
    <ThemedView
      className={`bg-zinc-800 rounded-lg p-4 border border-zinc-700 ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </ThemedView>
  );
}
