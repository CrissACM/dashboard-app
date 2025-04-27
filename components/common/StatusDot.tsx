import { ThemedView } from '../ThemedView';

interface StatusDotProps {
  color?: string;
  size?: number;
}

export function StatusDot({
  color = 'bg-green-500',
  size = 10,
}: StatusDotProps) {
  const sizeClass = `w-${size / 4} h-${size / 4}`;

  return (
    <ThemedView
      className={`rounded-full border-2 border-zinc-800 ${color} ${sizeClass}`}
      style={{ width: size, height: size }}
    />
  );
}
