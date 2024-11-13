import { Calendar as CalendarIcon, MapPin, Users as UsersIcon } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  image: string;
}

const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "Morning Yoga in the Park",
    description: "Join us for a refreshing morning yoga session suitable for all levels. Bring your own mat!",
    date: "March 25, 2024 • 7:00 AM",
    location: "Central Park",
    participants: 15,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500"
  },
  {
    id: 2,
    title: "5K Community Run",
    description: "Weekly community run. All paces welcome! Meet at the park entrance.",
    date: "March 27, 2024 • 6:30 AM",
    location: "Riverside Park",
    participants: 28,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500"
  }
];

export function Events() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_EVENTS.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <CalendarIcon size={20} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin size={20} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <UsersIcon size={20} className="mr-2" />
                  <span>{event.participants} participants</span>
                </div>
              </div>

              <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}