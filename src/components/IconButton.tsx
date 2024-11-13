import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  Icon: LucideIcon;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function IconButton({ Icon, label, onClick, className = '' }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-gray-500 hover:text-indigo-600 ${className}`}
    >
      <Icon size={20} />
      {label && <span className="text-xs mt-1">{label}</span>}
    </button>
  );
}