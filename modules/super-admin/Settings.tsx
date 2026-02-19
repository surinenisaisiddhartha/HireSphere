
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Shield, Brain, Globe, Bell, Save, AlertCircle } from 'lucide-react';

const SettingsItem = ({ icon: Icon, title, description, children }: any) => (
  <div className="flex items-start justify-between py-6 first:pt-0 last:pb-0 border-b last:border-0 border-gray-100">
    <div className="flex space-x-4">
      <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500 max-w-sm">{description}</p>
      </div>
    </div>
    <div>{children}</div>
  </div>
);

const PlatformSettings = () => {
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Platform Settings</h1>
        <p className="text-gray-500">Global configurations for HireSphere multi-tenant environment.</p>
      </div>

      <Card>
        <CardHeader title="General Configuration" />
        <CardContent className="space-y-2">
          <SettingsItem 
            icon={Shield} 
            title="Maintenance Mode" 
            description="Immediately disable all public and dashboard access except for Super Admins."
          >
            <button 
              onClick={() => setMaintenance(!maintenance)}
              className={`w-12 h-6 rounded-full transition-colors relative ${maintenance ? 'bg-red-500' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${maintenance ? 'translate-x-6' : ''}`}></div>
            </button>
          </SettingsItem>

          <SettingsItem 
            icon={Brain} 
            title="Default LLM Model" 
            description="Select the primary model used for interview evaluation and voice generation."
          >
            <select className="text-sm border rounded-lg px-3 py-1 bg-white outline-none focus:ring-2 focus:ring-blue-500">
              <option>Gemini 3 Flash (Latest)</option>
              <option>Gemini 2.5 Flash</option>
              <option>Gemini 3 Pro (Experimental)</option>
            </select>
          </SettingsItem>

          <SettingsItem 
            icon={Globe} 
            title="Global Language Support" 
            description="Enable or disable multi-language support for AI voice agents."
          >
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded">EN</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded">ES</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded">FR</span>
              <span className="px-2 py-1 bg-gray-50 text-gray-400 text-[10px] font-bold rounded">+ Add</span>
            </div>
          </SettingsItem>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Security & Notifications" />
        <CardContent className="space-y-2">
          <SettingsItem 
            icon={Bell} 
            title="System Announcements" 
            description="Display a banner to all users in the dashboard."
          >
            <Button size="sm" variant="outline">Create Banner</Button>
          </SettingsItem>
          
          <SettingsItem 
            icon={AlertCircle} 
            title="Audit Log Retention" 
            description="Duration to keep system logs before auto-archiving."
          >
             <select className="text-sm border rounded-lg px-3 py-1 bg-white outline-none focus:ring-2 focus:ring-blue-500">
              <option>90 Days</option>
              <option>1 Year</option>
              <option>Forever</option>
            </select>
          </SettingsItem>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-3">
        <Button variant="outline">Discard Changes</Button>
        <Button><Save className="w-4 h-4 mr-2" /> Save Configuration</Button>
      </div>
    </div>
  );
};

export default PlatformSettings;
