
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

interface ResultsFiltersProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
}

export const ResultsFilters: React.FC<ResultsFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search candidates or roles..." 
          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <select 
          className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
        </select>
        <div className="hidden lg:flex items-center space-x-2 px-3">
          <label className="text-xs font-bold text-gray-400 uppercase">Score Range</label>
          <input type="range" className="w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
        </div>
        <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-2" /> More Filters</Button>
      </div>
    </div>
  );
};
