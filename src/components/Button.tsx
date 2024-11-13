import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}