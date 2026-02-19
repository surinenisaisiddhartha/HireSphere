
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Role } from '../types';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Microscope, 
  History, 
  ShieldCheck, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  X,
  UserCircle,
  Briefcase,
  FileText,
  BarChart3,
  ChevronRight,
  BrainCircuit,
  Cpu,
  ClipboardList
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SidebarLink = ({ to, icon: Icon, label, collapsed }: any) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 mb-1 rounded-lg transition-all ${
        isActive 
          ? 'bg-blue-50 text-blue-700 font-medium' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
      {!collapsed && <span className="ml-3 text-sm">{label}</span>}
      {isActive && !collapsed && <ChevronRight className="ml-auto w-4 h-4" />}
    </Link>
  );
};

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = {
    [Role.SUPER_ADMIN]: [
      { to: '/super-admin', icon: LayoutDashboard, label: 'Overview' },
      { to: '/super-admin/companies', icon: Building2, label: 'Companies' },
      { to: '/super-admin/agents', icon: BrainCircuit, label: 'AI Agents' },
      { to: '/super-admin/users', icon: Users, label: 'Users' },
      { to: '/super-admin/interviews', icon: Microscope, label: 'Interviews' },
      { to: '/super-admin/analytics', icon: BarChart3, label: 'AI Analytics' },
      { to: '/super-admin/audit', icon: History, label: 'Audit Logs' },
    ],
    [Role.ADMIN]: [
      { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/admin/users', icon: Users, label: 'Users' },
      { to: '/admin/jds', icon: Briefcase, label: 'JDs' },
      { to: '/admin/resumes', icon: FileText, label: 'Resumes' },
      { to: '/admin/interviews', icon: Microscope, label: 'Interviews' },
      { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    ],
    [Role.RECRUITER]: [
      { to: '/recruiter', icon: LayoutDashboard, label: 'My Dashboard' },
      { to: '/recruiter/jds', icon: Briefcase, label: 'Job Descriptions' },
      { to: '/recruiter/resumes', icon: FileText, label: 'Candidates' },
      { to: '/recruiter/interviews', icon: Microscope, label: 'Interviews' },
      { to: '/recruiter/results', icon: ClipboardList, label: 'Results' },
    ],
  };

  const currentRole = user?.role || Role.RECRUITER;
  const items = menuItems[currentRole] || [];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside 
        className={`hidden md:flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="p-6 flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-white w-5 h-5" />
          </div>
          {!collapsed && <span className="ml-3 font-bold text-xl text-gray-900 tracking-tight">HireSphere</span>}
        </div>

        <nav className="flex-1 px-3 overflow-y-auto mt-2">
          {items.map((item, idx) => (
            <SidebarLink key={idx} {...item} collapsed={collapsed} />
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span className="ml-3 text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 z-20">
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 text-gray-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <button 
              className="hidden md:block p-2 text-gray-400 hover:text-gray-600"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="ml-4 relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-1.5 bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all w-64"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2"></div>
            <div className="flex items-center">
              <div className="text-right mr-3 hidden lg:block">
                <p className="text-sm font-semibold text-gray-900 leading-none">{user?.name}</p>
                <p className="text-xs text-gray-500 mt-1 capitalize">{user?.role.replace('_', ' ')}</p>
              </div>
              <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                <UserCircle className="w-7 h-7" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-gray-900/50 backdrop-blur-sm">
          <div className="w-64 bg-white h-full shadow-xl">
            <div className="p-6 flex items-center justify-between">
              <span className="font-bold text-xl text-gray-900">HireSphere</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <nav className="px-3">
              {items.map((item, idx) => (
                <SidebarLink key={idx} {...item} />
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
