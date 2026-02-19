
import React from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Cpu, Server, Database, Globe, CheckCircle2, AlertCircle } from 'lucide-react';

const StatusBadge = ({ healthy }: { healthy: boolean }) => (
  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold ${
    healthy ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
  }`}>
    <div className={`w-2 h-2 rounded-full ${healthy ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}></div>
    <span>{healthy ? 'OPERATIONAL' : 'DEGRADED'}</span>
  </div>
);

const HealthMetric = ({ icon: Icon, label, status, detail }: any) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="p-2 bg-white rounded-lg shadow-sm">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
      <div>
        <p className="text-sm font-bold text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{detail}</p>
      </div>
    </div>
    <StatusBadge healthy={status === 'ok'} />
  </div>
);

const SuperAdminSystemHealth = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Health</h1>
          <p className="text-gray-500">Monitoring platform core services and infrastructure.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Core Services" />
          <div className="p-6 space-y-4">
            <HealthMetric icon={Globe} label="API Gateway" detail="Average Response: 12ms" status="ok" />
            <HealthMetric icon={Server} label="Media Server" detail="Current Connections: 1,420" status="ok" />
            <HealthMetric icon={Database} label="Primary DB" detail="CPU Load: 12%" status="ok" />
            <HealthMetric icon={Cpu} label="AI Processing Engine" detail="Queue depth: 2" status="ok" />
          </div>
        </Card>

        <Card>
          <CardHeader title="Recent System Events" />
          <div className="divide-y divide-gray-100">
            {[
              { event: 'Auto-scaling: Cluster extended', type: 'info', time: '5m ago' },
              { event: 'Redis cache hit rate drop detected', type: 'warn', time: '12m ago' },
              { event: 'Daily database cleanup completed', type: 'info', time: '1h ago' },
              { event: 'Backup successful: US-East-1', type: 'success', time: '3h ago' },
            ].map((e, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {e.type === 'info' && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                  {e.type === 'warn' && <AlertCircle className="w-4 h-4 text-orange-500" />}
                  {e.type === 'success' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  <span className="text-sm text-gray-700">{e.event}</span>
                </div>
                <span className="text-xs text-gray-400">{e.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminSystemHealth;
