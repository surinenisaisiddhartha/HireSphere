
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Tabs } from '../../components/ui/Tabs';
import { MOCK_INTERVIEWS } from '../../data/mockData';
import { ChevronLeft, CheckCircle2, UserX } from 'lucide-react';

import { EvaluationScoreCards } from './components/EvaluationScoreCards';
import { SkillGapTable } from './components/SkillGapTable';
import { TranscriptViewer } from './components/TranscriptViewer';
import { DecisionActions } from './components/DecisionActions';

const SummaryTab = ({ interview }: { interview: any }) => (
  <div className="space-y-6">
    <Card>
      <CardHeader title="AI Screening Summary" />
      <CardContent className="space-y-4">
        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-sm text-blue-800 leading-relaxed font-medium italic">
          "{interview.candidateName} shows exceptional depth in modern architectural patterns. Communication is fluid and results-oriented."
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <h4 className="text-[10px] font-black text-green-800 uppercase tracking-widest mb-3">Core Strengths</h4>
            <ul className="text-xs text-green-700 space-y-2 font-bold">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2" /> Expert-level React Ecosystem knowledge</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2" /> Articulate system-design logic</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2" /> High cultural alignment score</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-xl border border-red-100">
            <h4 className="text-[10px] font-black text-red-800 uppercase tracking-widest mb-3">Weaknesses / Gaps</h4>
            <ul className="text-xs text-red-700 space-y-2 font-bold">
              <li className="flex items-center"><UserX className="w-3.5 h-3.5 mr-2" /> Shallow experience with Cloud-native CI/CD</li>
              <li className="flex items-center"><UserX className="w-3.5 h-3.5 mr-2" /> Occasionally verbose explanations</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const ResultDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const interview = MOCK_INTERVIEWS.find(i => i.id === id);

  if (!interview) return <div>Result not found</div>;

  const tabs = [
    { id: 'summary', label: 'Summary', content: <SummaryTab interview={interview} /> },
    { id: 'eval', label: 'AI Evaluation', content: <EvaluationScoreCards score={interview.aiScore} /> },
    { id: 'gap', label: 'Skill Gap Analysis', content: <SkillGapTable /> },
    { id: 'transcript', label: 'Transcript', content: <TranscriptViewer /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Results
        </Button>
      </div>

      <Card className="overflow-hidden border-none shadow-2xl">
        <div className="bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-800 p-8 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <div className="w-32 h-32 border-8 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 text-4xl font-black">
                {interview.candidateName.charAt(0)}
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight">{interview.candidateName}</h1>
                <p className="text-blue-100 font-bold opacity-90">{interview.jobRole} • Screened on {interview.date}</p>
                <div className="flex items-center mt-3 space-x-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-black rounded-full uppercase">
                    AI Agent: {interview.agentName}
                  </span>
                  <span className="text-[10px] font-black uppercase text-blue-200">Duration: {interview.duration}</span>
                </div>
              </div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 min-w-[200px] shadow-2xl shadow-blue-900/40">
              <p className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-1">AI Match Score</p>
              <div className="text-7xl font-black leading-none">{interview.aiScore}</div>
              <div className="mt-3 px-3 py-1 bg-white text-blue-700 rounded-full text-[10px] font-black uppercase inline-block">
                {interview.aiScore >= 75 ? 'Strong Match' : 'Review Needed'}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Tabs tabs={tabs} />
        </div>
        <div className="lg:col-span-1">
          <DecisionActions />
        </div>
      </div>
    </div>
  );
};

export default ResultDetailPage;
