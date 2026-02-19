
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { MetricCard } from '../../components/ui/MetricCard';
import { MOCK_INTERVIEWS } from '../../data/mockData';
import { TrendingUp, Users, ClipboardList, Clock } from 'lucide-react';

import { ResultsFilters } from './components/ResultsFilters';
import { ResultsTable } from './components/ResultsTable';

const ResultsListPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const basePath = pathname.startsWith('/admin') ? '/admin' : '/recruiter';
  const interviews = MOCK_INTERVIEWS.filter(i => i.status === 'completed' || i.status === 'failed');

  const filteredInterviews = interviews.filter(i => {
    const matchesSearch = i.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          i.jobRole.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Interview Results</h1>
          <p className="text-gray-500">Analyze AI-driven evaluation outcomes for screened candidates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total Screened" value={interviews.length} icon={Users} color="blue" />
        <MetricCard label="Pass Rate" value="68%" icon={TrendingUp} color="green" />
        <MetricCard label="Avg. Score" value="74.2" icon={ClipboardList} color="indigo" />
        <MetricCard label="Pending Review" value="5" icon={Clock} color="orange" />
      </div>

      <Card>
        <CardHeader title="Candidate Screening Registry" />
        <CardContent className="p-0">
          <ResultsFilters 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            statusFilter={statusFilter} 
            setStatusFilter={setStatusFilter} 
          />
          <ResultsTable 
            data={filteredInterviews} 
            onViewDetails={(id) => navigate(`${basePath}/results/${id}`)} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsListPage;
