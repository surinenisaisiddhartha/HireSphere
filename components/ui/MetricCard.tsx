
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isUp: boolean;
  };
  color?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon: Icon, trend, color = 'blue' }) => {
  const colors: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-50',
    indigo: 'text-indigo-600 bg-indigo-50',
    green: 'text-green-600 bg-green-50',
    red: 'text-red-600 bg-red-50',
    orange: 'text-orange-600 bg-orange-50',
    purple: 'text-purple-600 bg-purple-50',
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
          <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
          {trend && (
            <div className="mt-1 flex items-center">
              <span className={`text-xs font-semibold ${trend.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {trend.isUp ? '+' : '-'}{trend.value}%
              </span>
              <span className="text-xs text-gray-400 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colors[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
