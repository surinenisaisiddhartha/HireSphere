
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Role } from './types';
import { ProtectedRoute } from './router/ProtectedRoute';
import { DashboardLayout } from './layouts/DashboardLayout';

// Public Pages
import Home from './pages/public/Home';
import Login from './pages/auth/Login';

// Super Admin Modules
import SuperAdminOverview from './modules/super-admin/Overview';
import SuperAdminCompanies from './modules/super-admin/Companies';
import CompanyDetail from './modules/super-admin/CompanyDetail';
import SuperAdminAgents from './modules/super-admin/Agents';
import SuperAdminInterviews from './modules/super-admin/Interviews';
import SuperAdminUsers from './modules/super-admin/Users';
import SuperAdminAIAnalytics from './modules/super-admin/AIAnalytics';
import AuditLogs from './modules/super-admin/AuditLogs';

// Company Admin Modules
import CompanyAdminOverview from './modules/admin/Overview';
import AdminInterviews from './modules/admin/Interviews';
import AdminJDs from './modules/admin/JDs';
import AdminResumes from './modules/admin/Resumes';
import AdminAnalytics from './modules/admin/Analytics';
import AdminUsers from './modules/admin/Users';

// Recruiter Modules
import RecruiterDashboard from './modules/recruiter/Dashboard';

// Results Module
import ResultsListPage from './modules/results/ResultsListPage';
import ResultDetailPage from './modules/results/ResultDetailPage';

// Shared Modules
import InterviewDetail from './modules/shared/InterviewDetail';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />

          {/* Super Admin Protected Routes */}
          <Route path="/super-admin" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><SuperAdminOverview /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/companies" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><SuperAdminCompanies /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/companies/:id" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><CompanyDetail /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/agents" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><SuperAdminAgents /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/users" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><SuperAdminUsers /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/interviews" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><SuperAdminInterviews /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/interviews/:id" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><InterviewDetail /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/analytics" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><SuperAdminAIAnalytics /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/super-admin/audit" element={
            <ProtectedRoute allowedRoles={[Role.SUPER_ADMIN]}>
              <DashboardLayout><AuditLogs /></DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Company Admin Protected Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><CompanyAdminOverview /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><AdminUsers /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/jds" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><AdminJDs /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/resumes" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><AdminResumes /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/interviews" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><AdminInterviews /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/interviews/:id" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><InterviewDetail /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/analytics" element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <DashboardLayout><AdminAnalytics /></DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Recruiter Protected Routes */}
          <Route path="/recruiter" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><RecruiterDashboard /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/recruiter/jds" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><AdminJDs /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/recruiter/resumes" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><AdminResumes /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/recruiter/interviews" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><AdminInterviews /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/recruiter/interviews/:id" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><InterviewDetail /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/recruiter/results" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><ResultsListPage /></DashboardLayout>
            </ProtectedRoute>
          } />
          <Route path="/recruiter/results/:id" element={
            <ProtectedRoute allowedRoles={[Role.RECRUITER]}>
              <DashboardLayout><ResultDetailPage /></DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
