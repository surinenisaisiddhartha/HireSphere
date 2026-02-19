
import React, { useState } from 'react';
import { Card, CardHeader } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/DataTable';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { MOCK_USERS } from '../../data/mockData';
import { UserPlus, Settings, Trash2, Shield, Mail, Eye } from 'lucide-react';
import { User, Role } from '../../types';

const AdminUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({ name: '', email: '' });
  
  // Filter for users in this company or role RECRUITER (for demo)
  const companyUsers = MOCK_USERS.filter(u => u.companyId === 'c1' || u.role === Role.RECRUITER);

  const handleCreateUser = () => {
    // Mock user creation
    setIsModalOpen(false);
    setNewUserData({ name: '', email: '' });
  };

  const columns = [
    { 
      header: 'Name', 
      accessor: (u: User) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs border border-indigo-100">
            {u.name.charAt(0)}
          </div>
          <div>
            <span className="font-semibold block text-gray-900">{u.name}</span>
            <span className="text-xs text-gray-500">{u.email}</span>
          </div>
        </div>
      )
    },
    { 
      header: 'Role', 
      accessor: (u: User) => (
        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] font-bold uppercase rounded">
          {u.role.replace('_', ' ')}
        </span>
      )
    },
    { 
      header: 'Status', 
      accessor: (u: User) => (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
          u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>{u.status}</span>
      )
    },
    { 
      header: 'Activity Monitoring', 
      accessor: (u: User) => (
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">{u.lastActive || '2h ago'}</span>
          <div className={`w-2 h-2 rounded-full ${u.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        </div>
      )
    },
    { 
      header: 'Actions', 
      accessor: () => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" title="Watch Activity"><Eye className="w-4 h-4" /></Button>
          <Button variant="ghost" size="sm" title="Configure"><Settings className="w-4 h-4" /></Button>
          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50" title="Revoke Access"><Trash2 className="w-4 h-4" /></Button>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Recruiter Management</h1>
          <p className="text-gray-500">Create accounts for your recruiters and monitor their platform activity.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <UserPlus className="w-4 h-4 mr-2" /> Invite Recruiter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-white border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
             <Shield className="w-6 h-6" />
          </div>
          <div>
             <p className="text-xs font-bold text-gray-500 uppercase">Total Seats</p>
             <p className="text-xl font-black">12 / 20</p>
          </div>
        </Card>
        <Card className="p-4 bg-white border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
             <Eye className="w-6 h-6" />
          </div>
          <div>
             <p className="text-xs font-bold text-gray-500 uppercase">Online Now</p>
             <p className="text-xl font-black">4</p>
          </div>
        </Card>
        <Card className="p-4 bg-white border border-gray-100 flex items-center space-x-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
             <Mail className="w-6 h-6" />
          </div>
          <div>
             <p className="text-xs font-bold text-gray-500 uppercase">Pending Invites</p>
             <p className="text-xl font-black">2</p>
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader title="Internal Team Members" subtitle="Real-time access and activity log" />
        <DataTable columns={columns} data={companyUsers} />
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Invite New Recruiter"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateUser}>Send Invitation</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100 text-sm flex items-start space-x-3">
            <Shield className="w-5 h-5 shrink-0" />
            <p>New recruiters will be automatically assigned to <strong>TechCorp</strong> and granted access to active JDs and Candidates.</p>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="e.g. Rachel Zane"
              value={newUserData.name}
              onChange={e => setNewUserData({...newUserData, name: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Work Email</label>
            <input 
              type="email" 
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="rachel@techcorp.com"
              value={newUserData.email}
              onChange={e => setNewUserData({...newUserData, email: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Department</label>
            <select className="w-full border rounded-lg px-3 py-2 outline-none bg-white">
              <option>Engineering</option>
              <option>Product & Design</option>
              <option>Operations</option>
              <option>Sales & Marketing</option>
            </select>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminUsers;
