import { useState } from 'react';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const MOCK_POSTS: Post[] = [
  {
    id: 1,
    user: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    content: "Just completed my morning yoga session! 🧘‍♀️ Feeling energized and ready for the day. Who else loves starting their day with yoga?",
    likes: 24,
    comments: 5,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    user: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "New personal record on my 5K run! 🏃‍♂️ Consistency and dedication really do pay off. Keep pushing, everyone!",
    likes: 45,
    comments: 8,
    timestamp: "4 hours ago"
  }
];

export function Community() {
  const [posts] = useState<Post[]>(MOCK_POSTS);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Community Feed</h1>
        <div className="relative">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 pr-16 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Share your fitness journey..."
            rows={3}
          />
          <button className="absolute right-4 bottom-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Post
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <img
                src={post.avatar}
                alt={post.user}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{post.user}</h3>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <ThumbsUp size={20} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <MessageCircle size={20} />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}