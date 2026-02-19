
import React from 'react';
import { MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';

export const TranscriptViewer = () => {
  const transcript = [
    { 
      q: 'Explain your experience with React server components.', 
      a: 'I have used server components in Next.js 13+ projects to optimize data fetching and reduce bundle size. It helps in moving data-intensive tasks to the server.', 
      score: 92, 
      comment: 'Strong theoretical and practical knowledge.' 
    },
    { 
      q: 'How do you ensure accessibility in your web applications?', 
      a: 'I use semantic HTML, ARIA labels where necessary, and always test with keyboard navigation and color contrast tools.', 
      score: 88, 
      comment: 'Good awareness of standards.' 
    },
    { 
      q: 'Tell me about a complex bug you solved using Docker.', 
      a: 'I had some issues with environment variables not passing correctly to the container, so I checked the compose file and fixed the mapping.', 
      score: 55, 
      comment: 'Response was shallow; lacked depth in technical troubleshooting.',
      isWeak: true
    },
  ];

  return (
    <div className="space-y-4">
      {transcript.map((item, idx) => (
        <Card key={idx} className={`border-l-4 ${item.isWeak ? 'border-l-orange-500' : 'border-l-blue-500'}`}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-[10px] font-black text-gray-400 uppercase">Question {idx + 1}</p>
                    {item.isWeak && <span className="flex items-center text-[10px] font-bold text-orange-600 uppercase"><AlertTriangle className="w-3 h-3 mr-1" /> Attention Needed</span>}
                  </div>
                  <p className="text-sm font-bold text-gray-900">{item.q}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase mb-1">AI Relevance</p>
                <span className={`text-sm font-black ${item.score >= 80 ? 'text-green-600' : 'text-orange-600'}`}>{item.score}%</span>
              </div>
            </div>
            <div className="ml-11 mb-4 p-4 bg-gray-50 rounded-xl italic text-sm text-gray-700 leading-relaxed border border-gray-100">
              "{item.a}"
            </div>
            <div className="ml-11 flex items-center space-x-2">
               <div className="h-4 w-px bg-gray-200"></div>
               <p className="text-xs text-gray-500"><span className="font-bold text-gray-700">AI Feedback:</span> {item.comment}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
