import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Landing } from './pages/Landing';
import { AuthLayout } from './layouts/AuthLayout';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Assessment } from './pages/Assessment';
import { Dashboard } from './pages/Dashboard';
import { Roadmap } from './pages/Roadmap';
import { Mentors } from './pages/Mentors';
import { MentorDetails } from './pages/MentorDetails';
import { SkillGap } from './pages/SkillGap';
import { Jobs } from './pages/Jobs';
import { JobDetails } from './pages/JobDetails';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { Settings } from './pages/Settings';
import { Profile } from './pages/Profile';
import { AdminLayout } from './layouts/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/* Placeholder for future admin pages */}
      </Route>
      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="mentors/:id" element={<MentorDetails />} />
        <Route path="skills" element={<SkillGap />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="jobs/:id" element={<JobDetails />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        {/* Add more routes here later */}
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/assessment" element={<Assessment />} />
    </Routes>
  );
}

export default App
