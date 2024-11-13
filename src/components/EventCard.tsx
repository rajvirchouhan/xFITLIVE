import { Calendar, MapPin, Users } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  image: string;
}

export function EventCard({ 
  title, 
  description, 
  date, 
  location, 
  participants, 
  image 
}: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover -mt-6 -mx-6 mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-500">
          <Calendar size={20} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <MapPin size={20} className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Users size={20} className="mr-2" />
          <span>{participants} participants</span>
        </div>
      </div>

      <Button fullWidth>Join Event</Button>
    </Card>
  );
}