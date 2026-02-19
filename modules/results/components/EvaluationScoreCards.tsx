
import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';

interface EvaluationScoreCardsProps {
  score: number;
}

export const EvaluationScoreCards: React.FC<EvaluationScoreCardsProps> = ({ score }) => {
  const metrics = [
    { label: 'Technical Knowledge', value: score + 2, desc: 'Understanding of core domain principles' },
    { label: 'Communication', value: score - 5, desc: 'Clarity, pace and articulation' },
    { label: 'Problem Solving', value: score + 5, desc: 'Logic and structured thinking' },
    { label: 'Confidence', value: score - 2, desc: 'Self-assurance and poise' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {metrics.map((m) => (
        <Card key={m.label} className="border-gray-100 shadow-none bg-gray-50/50">
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-sm font-bold text-gray-900">{m.label}</h4>
                <p className="text-[10px] text-gray-500 font-medium">{m.desc}</p>
              </div>
              <span className="text-xl font-black text-blue-600">{m.value}%</span>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden border border-gray-100">
              <div 
                className={`h-full bg-blue-600`} 
                style={{ width: `${m.value}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
