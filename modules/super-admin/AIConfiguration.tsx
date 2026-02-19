
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { BrainCircuit, GitBranch, Settings2, ShieldCheck, Play } from 'lucide-react';

const AIConfiguration = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">AI Global Configuration</h1>
        <p className="text-gray-500">Fine-tune evaluation engines and prompt management.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader title="Evaluation Prompt Versioning" subtitle="Manage current system instructions for interviewers" />
            <CardContent>
              <div className="space-y-4">
                {[
                  { version: 'v3.4.2-stable', date: '2024-05-20', status: 'active', desc: 'Optimized for technical depth and soft skill analysis.' },
                  { version: 'v3.5.0-beta', date: '2024-05-22', status: 'testing', desc: 'Experimental multi-language intent detection.' },
                  { version: 'v3.4.1', date: '2024-04-15', status: 'archived', desc: 'Baseline evaluation model.' },
                ].map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <GitBranch className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-bold text-gray-900">{p.version}</p>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-black uppercase ${
                            p.status === 'active' ? 'bg-green-100 text-green-700' :
                            p.status === 'testing' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                          }`}>{p.status}</span>
                        </div>
                        <p className="text-xs text-gray-500">{p.desc}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Deploy</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Safety & Bias Controls" />
            <CardContent className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                     <p className="text-xs font-black text-blue-800 uppercase mb-2">Bias detection threshold</p>
                     <p className="text-2xl font-black text-blue-900">0.05%</p>
                  </div>
                  <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                     <p className="text-xs font-black text-indigo-800 uppercase mb-2">Anonymization level</p>
                     <p className="text-2xl font-black text-indigo-900">High</p>
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-all">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                    <div>
                       <p className="text-sm font-bold text-gray-900">PII Redaction</p>
                       <p className="text-xs text-gray-500">Automatically hide PII from interview logs for recruiters.</p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-all">
                    <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                    <div>
                       <p className="text-sm font-bold text-gray-900">Diversity Guard</p>
                       <p className="text-xs text-gray-500">Alert if AI evaluation shows statistically unusual outcome variance.</p>
                    </div>
                  </label>
               </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Engine Parameters" />
            <CardContent className="space-y-4">
               <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500">Temperature (Creativity)</label>
                  <input type="range" className="w-full" min="0" max="1" step="0.1" defaultValue="0.4" />
               </div>
               <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500">Timeout Limit (ms)</label>
                  <input type="number" className="w-full border rounded-lg px-3 py-1 text-sm outline-none" defaultValue="30000" />
               </div>
               <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500">Retry Policy</label>
                  <select className="w-full border rounded-lg px-3 py-1 text-sm outline-none">
                    <option>Exponential Backoff</option>
                    <option>Single Retry</option>
                    <option>Immediate Fail</option>
                  </select>
               </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-none">
            <CardHeader title="System Sandbox" action={<Play className="w-4 h-4 text-green-400" />} />
            <CardContent>
               <p className="text-xs text-gray-400 mb-4">Test prompt changes in the evaluation sandbox before global rollout.</p>
               <Button variant="secondary" fullWidth className="bg-white/10 hover:bg-white/20 border-none">Enter Sandbox</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIConfiguration;
