
import React from 'react';
import { DataTable } from '../../../components/ui/DataTable';
import { Button } from '../../../components/ui/Button';
import { Eye } from 'lucide-react';
import { Interview } from '../../../types';

interface ResultsTableProps {
  data: Interview[];
  onViewDetails: (id: string) => void;
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ data, onViewDetails }) => {
  const columns = [
    { 
      header: 'Candidate Name', 
      accessor: (i: Interview) => (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900">{i.candidateName}</span>
          <span className="text-[10px] text-gray-400 font-bold uppercase">{i.date}</span>
        </div>
      )
    },
    { header: 'JD Role', accessor: (i: Interview) => i.jobRole },
    { header: 'Agent Used', accessor: (i: Interview) => i.agentName },
    { header: 'Interview Duration', accessor: (i: Interview) => i.duration },
    { 
      header: 'Overall Score', 
      accessor: (i: Interview) => (
        <div className="flex items-center space-x-2">
          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${i.aiScore >= 80 ? 'bg-green-500' : i.aiScore >= 60 ? 'bg-blue-500' : 'bg-red-500'}`} 
              style={{ width: `${i.aiScore}%` }}
            ></div>
          </div>
          <span className="font-bold text-sm text-gray-900">{i.aiScore}%</span>
        </div>
      )
    },
    { 
      header: 'Confidence', 
      accessor: () => <span className="text-gray-500 font-medium">94%</span>
    },
    { 
      header: 'Status', 
      accessor: (i: Interview) => (
        <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${
          i.aiScore >= 75 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {i.aiScore >= 75 ? 'Passed' : 'Failed'}
        </span>
      )
    },
    { 
      header: 'Action', 
      accessor: (i: Interview) => (
        <Button variant="ghost" size="sm" onClick={() => onViewDetails(i.id)}>
          <Eye className="w-4 h-4 mr-1" /> View Details
        </Button>
      )
    },
  ];

  return <DataTable columns={columns} data={data} onRowClick={(i) => onViewDetails(i.id)} />;
};
