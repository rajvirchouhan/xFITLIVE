import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Calendar, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-indigo-600">xFITLIVE</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around py-3">
            <Link 
              to="/" 
              className={`flex flex-col items-center ${isActive('/') ? 'text-indigo-600' : 'text-gray-500'}`}
            >
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link 
              to="/community" 
              className={`flex flex-col items-center ${isActive('/community') ? 'text-indigo-600' : 'text-gray-500'}`}
            >
              <Users size={24} />
              <span className="text-xs mt-1">Community</span>
            </Link>
            <Link 
              to="/events" 
              className={`flex flex-col items-center ${isActive('/events') ? 'text-indigo-600' : 'text-gray-500'}`}
            >
              <Calendar size={24} />
              <span className="text-xs mt-1">Events</span>
            </Link>
            <Link 
              to="/profile" 
              className={`flex flex-col items-center ${isActive('/profile') ? 'text-indigo-600' : 'text-gray-500'}`}
            >
              <User size={24} />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}