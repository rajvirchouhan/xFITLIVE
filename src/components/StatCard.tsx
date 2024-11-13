interface StatCardProps {
  value: number | string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}