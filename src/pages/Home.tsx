import { Activity, Award, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to xFITLIVE</h1>
        <p className="text-gray-600">Join our fitness community and achieve your goals together!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Daily Activity</h2>
          </div>
          <p className="text-gray-600">Track your daily workouts and progress</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Community</h2>
          </div>
          <p className="text-gray-600">Connect with like-minded fitness enthusiasts</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Award className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Challenges</h2>
          </div>
          <p className="text-gray-600">Join challenges and earn rewards</p>
        </div>
      </div>
    </div>
  );
}