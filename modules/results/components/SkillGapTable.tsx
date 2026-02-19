
import React from 'react';
import { Target, AlertCircle, CheckCircle2 } from 'lucide-react';

export const SkillGapTable = () => {
  const skills = [
    { name: 'React.js Architecture', required: 90, actual: 95, status: 'Surpassed' },
    { name: 'TypeScript / Static Typing', required: 85, actual: 82, status: 'Met' },
    { name: 'System Design Patterns', required: 80, actual: 65, status: 'Gap' },
    { name: 'State Management (Redux/Zustand)', required: 75, actual: 80, status: 'Met' },
  ];

  return (
    <div className="overflow-hidden border border-gray-100 rounded-xl">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Skill</th>
            <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Required</th>
            <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Candidate</th>
            <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Indicator</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {skills.map((s) => (
            <tr key={s.name}>
              <td className="px-6 py-4 text-sm font-semibold text-gray-900">{s.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{s.required}%</td>
              <td className="px-6 py-4 text-sm font-black text-gray-900">{s.actual}%</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                    s.status === 'Surpassed' ? 'bg-green-100 text-green-700' :
                    s.status === 'Met' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {s.status}
                  </span>
                  {s.status === 'Gap' ? (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
