import { Settings, Camera, Edit2 } from 'lucide-react';

export function Profile() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
              <Camera size={16} />
            </button>
          </div>
          
          <h2 className="mt-4 text-xl font-semibold">Sarah Johnson</h2>
          <p className="text-gray-500">Fitness Enthusiast</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <Edit2 size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">Email</label>
            <p className="mt-1">sarah.johnson@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Location</label>
            <p className="mt-1">New York, USA</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Member Since</label>
            <p className="mt-1">March 2024</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Stats</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-indigo-600">24</p>
            <p className="text-sm text-gray-500">Workouts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-600">12</p>
            <p className="text-sm text-gray-500">Events</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-600">156</p>
            <p className="text-sm text-gray-500">Connections</p>
          </div>
        </div>
      </div>
    </div>
  );
}