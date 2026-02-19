
import React from 'react';
import { MetricCard } from '../../components/ui/MetricCard';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Microscope, Users, CheckCircle, TrendingUp, Plus, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { MOCK_INTERVIEWS } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';

const RecruiterDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
          <p className="text-gray-500">Manage your candidate pipeline and interview results.</p>
        </div>
        <Button size="lg" className="shadow-lg shadow-blue-200">
          <Plus className="w-5 h-5 mr-2" /> Create New Interview
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Active Interviews" value="8" icon={Microscope} color="blue" />
        <MetricCard label="Total Candidates" value="42" icon={Users} color="indigo" />
        <MetricCard label="Passed" value="15" icon={CheckCircle} color="green" />
        <MetricCard label="Avg. Score" value="84" icon={TrendingUp} color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader title="My Recent Interviews" action={
            <Button variant="ghost" size="sm">View All <ArrowRight className="w-4 h-4 ml-1" /></Button>
          } />
          <DataTable 
            columns={[
              { header: 'Candidate', accessor: 'candidateName' },
              { header: 'Role', accessor: 'jobRole' },
              { header: 'Score', accessor: 'aiScore' },
              { header: 'Status', accessor: (i: any) => (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  i.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>{i.status}</span>
              )}
            ]} 
            data={MOCK_INTERVIEWS.slice(0, 5)} 
          />
        </Card>

        <Card>
          <CardHeader title="Quick Actions" />
          <CardContent className="space-y-3">
            <button className="w-full text-left p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <p className="font-bold text-gray-900 group-hover:text-blue-700">Upload Resume</p>
              <p className="text-xs text-gray-500">Parse a new candidate profile</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <p className="font-bold text-gray-900 group-hover:text-blue-700">Add Job Description</p>
              <p className="text-xs text-gray-500">Define requirements for AI</p>
            </button>
            <button className="w-full text-left p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
              <p className="font-bold text-gray-900 group-hover:text-blue-700">Invite Candidate</p>
              <p className="text-xs text-gray-500">Send an interview link</p>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
