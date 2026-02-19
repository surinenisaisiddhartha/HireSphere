
import React from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Microscope, MessageSquare, Brain, CheckCircle, XCircle, ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const InterviewDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const MOCK_TRANSCRIPT = [
    { speaker: 'AI', text: 'Hello John, thank you for joining. Can you tell me about your experience with React?', time: '0:05' },
    { speaker: 'Candidate', text: 'Hi Aurora! I have about 5 years of experience. I recently led a migration from class components to hooks for a high-traffic e-commerce platform.', time: '0:45' },
    { speaker: 'AI', text: 'That sounds impressive. How did you handle performance optimization during that migration?', time: '1:12' },
    { speaker: 'Candidate', text: 'We used memoization extensively and implemented virtualization for large lists using react-window.', time: '1:50' },
  ];

  const EVALUATION_POINTS = [
    { skill: 'React Fundamentals', score: 95, feedback: 'Demonstrates deep understanding of state management and hooks lifecycle.' },
    { skill: 'Performance Optimization', score: 88, feedback: 'Mentioned memoization and virtualization, showing practical knowledge of bottlenecks.' },
    { skill: 'Problem Solving', score: 72, feedback: 'Identified key challenges but took some time to explain complex logic.' },
    { skill: 'Communication', score: 90, feedback: 'Clear, concise, and professional tone throughout the session.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Interview #I-{id?.toUpperCase() || '4201'}</h1>
          <p className="text-gray-500">Candidate: John Doe • Senior React Developer</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader title="Full Transcript" subtitle="Generated from real-time audio analysis" />
            <CardContent className="max-h-[500px] overflow-y-auto space-y-6">
              {MOCK_TRANSCRIPT.map((entry, idx) => (
                <div key={idx} className={`flex space-x-4 ${entry.speaker === 'AI' ? 'bg-blue-50/50 p-4 rounded-xl border border-blue-100' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    entry.speaker === 'AI' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {entry.speaker[0]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-black text-gray-900">{entry.speaker}</span>
                      <span className="text-[10px] text-gray-400">{entry.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{entry.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-none">
            <CardHeader title="AI Overall Score" action={<Brain className="w-6 h-6 opacity-50" />} />
            <CardContent className="text-center py-8">
              <div className="text-6xl font-black mb-2">88</div>
              <p className="text-indigo-100 font-medium">Strong Recommend</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Skill breakdown" />
            <CardContent className="space-y-6">
              {EVALUATION_POINTS.map((point) => (
                <div key={point.skill}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-900">{point.skill}</span>
                    <span className={`text-xs font-black ${point.score > 80 ? 'text-green-600' : 'text-orange-600'}`}>
                      {point.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-1 rounded-full mb-2">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${point.score}%` }}></div>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-tight italic">"{point.feedback}"</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <div className="flex flex-col space-y-2">
             <Button variant="primary" fullWidth><CheckCircle className="w-4 h-4 mr-2" /> Approve to Next Round</Button>
             <Button variant="danger" fullWidth className="bg-red-50 text-red-600 border-none hover:bg-red-100"><XCircle className="w-4 h-4 mr-2" /> Reject Candidate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetail;
