import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';
import { Avatar } from './Avatar';
import { IconButton } from './IconButton';
import { Card } from './Card';

interface PostCardProps {
  user: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export function PostCard({ user, avatar, content, likes, comments, timestamp }: PostCardProps) {
  return (
    <Card>
      <div className="flex items-center mb-4">
        <Avatar src={avatar} alt={user} className="mr-4" />
        <div>
          <h3 className="font-semibold">{user}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center space-x-6">
        <IconButton Icon={ThumbsUp} label={likes.toString()} />
        <IconButton Icon={MessageCircle} label={comments.toString()} />
        <IconButton Icon={Share2} label="Share" />
      </div>
    </Card>
  );
}