
import React from 'react';
import { UserCheck, UserX, MessageSquare, Save } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Card, CardHeader, CardContent } from '../../../components/ui/Card';

export const DecisionActions = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title="Shortlist Decision" />
        <CardContent className="space-y-4">
          <p className="text-xs text-gray-500 italic mb-4">You can manually override the AI recommendation below.</p>
          <div className="space-y-2">
            <Button fullWidth variant="primary" className="bg-green-600 hover:bg-green-700">
              <UserCheck className="w-4 h-4 mr-2" /> Shortlist Candidate
            </Button>
            <Button fullWidth variant="outline" className="text-red-600 hover:bg-red-50 border-red-200">
              <UserX className="w-4 h-4 mr-2" /> Reject Candidate
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader title="Recruiter Evaluation" />
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Internal Notes</label>
              <textarea 
                className="w-full border border-gray-200 rounded-xl p-3 text-sm h-32 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                placeholder="Share your thoughts with the team..."
              ></textarea>
            </div>
            <Button fullWidth size="md" variant="ghost" className="border border-gray-100 hover:bg-gray-50">
              <Save className="w-4 h-4 mr-2" /> Save Notes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
