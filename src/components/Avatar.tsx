interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-24 h-24'
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeStyles[size]} ${className}`}
    />
  );
}