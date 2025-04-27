import { Avatar } from '../common/Avatar';
import { Card } from '../common/Card';
import { ThemedText } from '../ThemedText';

interface ProfileHeaderCardProps {
  name?: string;
  avatarUrl?: string;
}

export function ProfileHeaderCard({
  name = 'User Name',
  avatarUrl,
}: ProfileHeaderCardProps) {
  return (
    <Card className='items-center px-0 mb-5 bg-transparent border-0'>
      <Avatar source={avatarUrl} size={100} showStatus={true} />
      <ThemedText className='mt-3 text-xl font-semibold text-white'>
        {name}
      </ThemedText>
    </Card>
  );
}
